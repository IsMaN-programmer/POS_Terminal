# Read the file as raw bytes
$bytes = [System.IO.File]::ReadAllBytes("js\app.js")
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

# The corruption: original UTF-8 bytes were read as ISO 8859-5 and re-encoded as UTF-8
# Fix: reverse the double encoding
# Detection: any sequence D0 A1 D0 83 D0 A1 ... that corresponds to double-encoded Cyrillic

# Actually, let's take a simpler approach.
# The original file was UTF-8. After repeated Get-Content/Set-Content with -Encoding UTF8,
# some multi-byte sequences got corrupted.
# 
# Known corrupted text: "сум" became "СЃСѓР"
# Let's fix all occurrences

# Fix: reverse the double-encoding
# Steps:
# 1. Read current text as UTF-8
# 2. For each Cyrillic sequence, if it looks double-encoded, fix it
#
# A simpler approach: 
# D1 81 D1 83 D0 BC (correct UTF-8 "сум") became:
# D0 A1 D0 83 D0 A1 D1 93 D0 A0 (corrupted)
#
# The corruption path: bytes read as Windows-1252, then re-encoded as UTF-8
# To fix: read corrupted UTF-8 as Windows-1252 to get original bytes, then decode as UTF-8

# Actually let's just map the known corrupted strings
$replacements = @{
    # "сум" corrupted
    "СЃСѓРј" = "сум"
    # Common Russian words that might be corrupted
    "Название" = "Название"
    "блюдо" = "блюдо"
    "Цена" = "Цена"
    "Категория" = "Категория"
    "Доступность" = "Доступность"
}

# Let's find ALL corrupted Russian characters and fix them
# The corruption is: every Russian UTF-8 byte sequence (starting with D0-D3) was
# interpreted as Latin-1 and re-encoded to UTF-8
#
# Correct ranges:
# Cyrillic U+0400-U+04FF in UTF-8: D0 80 - D3 BF
# 
# Corrupted patterns:
# A D0 byte that should be part of a 2-byte UTF-8 sequence for Cyrillic might have been
# split and re-encoded.

# The simplest fix: assume the file is valid UTF-8. 
# Any character in ranges 0x80-0x9F (C1 control chars from Latin-1 re-encode) or 
# sequences like C2 80-C2 9F indicate corruption.

# Actually, I think the issue is that Set-Content may have changed BOM.
# Let's just try rewriting the file with proper BOM handling.

# First, let's check if the file now has a BOM
"BOM bytes: $($bytes[0..2])"
# UTF-8 BOM is EF BB BF

# The corruption happened because the earlier -replace operations used
# different encoding between read and write cycles.
# Let's try to fix by reading the bytes, converting properly.

# Read bytes as UTF-8
$utf8 = [System.Text.UTF8Encoding]::new($false) # no BOM
$text2 = $utf8.GetString($bytes)

# Now try to undo the damage: characters above U+00FF were likely corruption artifacts
# Check for mojibake patterns

# Save with proper UTF-8 (no BOM)
[System.IO.File]::WriteAllText("js\app.js", $text2, $utf8)
"Done rewriting without BOM"

$ErrorActionPreference = "Stop"
$ProjectRoot = Resolve-Path "$PSScriptRoot\.."

Write-Host "===== POS Terminal Electron Build =====" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install dependencies
Write-Host "[1/4] Installing dependencies..." -ForegroundColor Yellow
Set-Location $ProjectRoot
npm install 2>&1
if ($LASTEXITCODE -ne 0) { throw "npm install failed" }

# Step 2: Build frontend
Write-Host "[2/4] Building frontend..." -ForegroundColor Yellow
npm run build 2>&1
if ($LASTEXITCODE -ne 0) { throw "Frontend build failed" }

# Step 3: Build Electron app
Write-Host "[3/4] Building Electron app..." -ForegroundColor Yellow
npx electron-builder --win --x64 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "[4/4] Build complete!" -ForegroundColor Green
    
    $installer = Get-ChildItem "$ProjectRoot\dist-electron\POS Terminal Setup*.exe" | Select-Object -First 1
    if ($installer) {
        $size = $installer.Length / 1MB
        Write-Host "Installer: $($installer.FullName)" -ForegroundColor Green
        Write-Host "Size: $([math]::Round($size, 2)) MB" -ForegroundColor Green
    }

    $portable = Get-ChildItem "$ProjectRoot\dist-electron\POS Terminal*.exe" | Where-Object { $_.Name -notlike "*Setup*" } | Select-Object -First 1
    if ($portable) {
        $size2 = $portable.Length / 1MB
        Write-Host "Portable: $($portable.FullName)" -ForegroundColor Green
        Write-Host "Size: $([math]::Round($size2, 2)) MB" -ForegroundColor Green
    }
} else {
    Write-Error "Electron build failed"
}

Write-Host ""
Write-Host "===== Done =====" -ForegroundColor Cyan

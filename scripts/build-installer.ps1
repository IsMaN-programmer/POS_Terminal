param(
    [string]$Mode = "auto"
)

$ErrorActionPreference = "Stop"
$ProjectRoot = Resolve-Path "$PSScriptRoot\.."

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  POS Terminal - Build Installer" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Detect available tools
$hasElectron = Test-Path "$ProjectRoot\node_modules\.bin\electron-builder.cmd"
$hasInno = Test-Path "C:\Program Files (x86)\Inno Setup 6\ISCC.exe"

if ($Mode -eq "auto") {
    if ($hasElectron) {
        $Mode = "electron"
    } elseif ($hasInno) {
        $Mode = "inno"
    } else {
        Write-Host "No build tool found. Installing electron-builder..." -ForegroundColor Yellow
        Set-Location $ProjectRoot
        npm install --save-dev electron electron-builder 2>&1 | Out-Null
        $Mode = "electron"
    }
}

Write-Host "Build mode: $Mode" -ForegroundColor Yellow
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

if ($Mode -eq "electron") {
    # ===== Electron Build =====
    Write-Host "[3/4] Building Electron app..." -ForegroundColor Yellow
    
    # Ensure electron-builder is available
    $builder = Get-Command "electron-builder" -ErrorAction SilentlyContinue
    if (-not $builder) {
        $builder = Get-Command "$ProjectRoot\node_modules\.bin\electron-builder.cmd" -ErrorAction SilentlyContinue
    }
    
    if (-not $builder) {
        Write-Host "electron-builder not found. Installing..." -ForegroundColor Yellow
        Set-Location $ProjectRoot
        npm install --save-dev electron electron-builder 2>&1 | Out-Null
    }
    
    npx electron-builder --win --x64 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "[4/4] Build complete!" -ForegroundColor Green
        
        Get-ChildItem "$ProjectRoot\dist-electron\*.exe" | ForEach-Object {
            $size = $_.Length / 1MB
            Write-Host "  $($_.Name) - $([math]::Round($size, 2)) MB" -ForegroundColor Green
        }
    } else {
        Write-Error "Electron build failed"
    }
    
} elseif ($Mode -eq "inno") {
    # ===== Inno Setup Build =====
    Write-Host "[3/4] Preparing files..." -ForegroundColor Yellow
    
    $outputDir = "$ProjectRoot\dist-pos"
    if (Test-Path $outputDir) { Remove-Item -Recurse -Force $outputDir }
    New-Item -ItemType Directory -Path "$outputDir\server" -Force | Out-Null
    New-Item -ItemType Directory -Path "$outputDir\frontend" -Force | Out-Null
    
    Copy-Item "$ProjectRoot\backend\server\index.js" "$outputDir\server\"
    Copy-Item "$ProjectRoot\backend\server\db.js" "$outputDir\server\"
    Copy-Item "$ProjectRoot\backend\server\sync.js" "$outputDir\server\"
    Copy-Item -Recurse "$ProjectRoot\frontend\dist" "$outputDir\frontend\"
    Copy-Item -Recurse "$ProjectRoot\frontend\js" "$outputDir\frontend\"
    Copy-Item "$ProjectRoot\package.json" "$outputDir\"
    Copy-Item "$ProjectRoot\package-lock.json" "$outputDir\"
    
    Set-Location $outputDir
    npm install --omit=dev --ignore-scripts 2>&1 | Out-Null
    Copy-Item "$ProjectRoot\scripts\start-pos.bat" "$outputDir\"
    
    Write-Host "[4/4] Creating Inno Setup installer..." -ForegroundColor Yellow
    
    $sourceDir = $outputDir -replace '\\', '\\'
    $issContent = @"
#define MyAppName "POS Terminal"
#define MyAppVersion "1.0.0"
#define MyAppExeName "start-pos.bat"
#define SourceDir "$sourceDir"

[Setup]
AppId=B4A2B3C5-8D7E-4F1A-9C3D-6E5F2A1B8C4D
AppName={#MyAppName}
AppVersion={#MyAppVersion}
DefaultDirName={autopf}\{#MyAppName}
DefaultGroupName={#MyAppName}
AllowNoIcons=yes
OutputDir=$([System.IO.Path]::GetFullPath("$ProjectRoot") -replace '\\', '\\')
OutputBaseFilename=POS-Terminal-Setup-v{#MyAppVersion}
Compression=lzma2/ultra64
SolidCompression=yes
WizardStyle=modern
PrivilegesRequired=admin
DisableProgramGroupPage=yes
CloseApplications=no

[Languages]
Name: "russian"; MessagesFile: "compiler:Languages\Russian.isl"

[Tasks]
Name: "desktopicon"; Description: "Create desktop shortcut"; GroupDescription: "Shortcuts:"; Flags: checkedonce

[Dirs]
Name: "{app}"

[Files]
Source: "{#SourceDir}\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; WorkingDir: "{app}"
Name: "{group}\Open POS UI"; Filename: "http://localhost:80"
Name: "{group}\Uninstall {#MyAppName}"; Filename: "{uninstallexe}"
Name: "{autodesktop}\{#MyAppName}"; Filename: "{app}\{#MyAppExeName}"; WorkingDir: "{app}"; Tasks: desktopicon

[Run]
Filename: "{app}\{#MyAppExeName}"; Description: "Start {#MyAppName}"; Flags: nowait postinstall skipifsilent shellexec

[UninstallRun]
Filename: "taskkill"; Parameters: "/f /im node.exe"; Flags: runhidden
"@
    
    $issFile = "$ProjectRoot\pos-terminal-installer.iss"
    $issContent | Out-File -FilePath $issFile -Encoding UTF8 -Force
    
    & "C:\Program Files (x86)\Inno Setup 6\ISCC.exe" $issFile 2>&1
    
    $installerFile = Get-ChildItem "$ProjectRoot\POS-Terminal-Setup-*.exe" | Select-Object -First 1
    if ($installerFile) {
        $size = $installerFile.Length / 1MB
        Write-Host "Installer: $($installerFile.Name) - $([math]::Round($size, 2)) MB" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "===== Done =====" -ForegroundColor Cyan

@echo off
echo ===================================================
echo   Configuring FiscalDriveAPI and CORS (ASCII version)
echo ===================================================
echo.

:: 1. Check admin privileges
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [CRITICAL ERROR] Please right-click this file and choose "Run as administrator"!
    echo.
    pause
    exit /b
)

:: 2. Configure NSSM
echo [1/4] Configuring NSSM parameter -no-tls...
if exist "C:\Program Files\FiscalDriveAPI\nssm.exe" (
    "C:\Program Files\FiscalDriveAPI\nssm.exe" set FiscalDriveAPI AppParameters "-mode api -log-level 5 -log - -no-tls"
    echo Success.
) else (
    echo [ERROR] nssm.exe not found in C:\Program Files\FiscalDriveAPI\
)
echo.

:: 3. Enable CORS
echo [2/4] Enabling CORS in config files...
set "API_CONFIG=C:\Program Files\FiscalDriveAPI\config.ini"
set "SRV_CONFIG=C:\Program Files\FiscalDriveService\config.ini"

if exist "%API_CONFIG%" (
    powershell -Command "(Get-Content -Path '%API_CONFIG%' -Encoding UTF8) -replace '#cors_origin=http://example.com', 'cors_origin=*' | Set-Content -Path '%API_CONFIG%' -Encoding UTF8"
    echo Enabled CORS in %API_CONFIG%
) else (
    echo [ERROR] %API_CONFIG% not found.
)

if exist "%SRV_CONFIG%" (
    powershell -Command "(Get-Content -Path '%SRV_CONFIG%' -Encoding UTF8) -replace '#cors_origin=http://example.com', 'cors_origin=*' | Set-Content -Path '%SRV_CONFIG%' -Encoding UTF8"
    echo Enabled CORS in %SRV_CONFIG%
) else (
    echo [ERROR] %SRV_CONFIG% not found.
)
echo.

:: 4. Restart services
echo [3/4] Restarting services...
echo Restarting FiscalDriveAPI...
net stop FiscalDriveAPI 2>nul
net start FiscalDriveAPI

echo.
echo Restarting FiscalDriveService...
net stop FiscalDriveService 2>nul
net start FiscalDriveService
echo.

:: 5. Status
echo [4/4] Service status:
sc query FiscalDriveAPI | findstr STATE
sc query FiscalDriveService | findstr STATE
echo.
echo ===================================================
echo   Setup finished! Please refresh index.html
echo ===================================================
echo.
pause

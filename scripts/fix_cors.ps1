$apiPath = "C:\Program Files\FiscalDriveAPI\config.ini"
$srvPath = "C:\Program Files\FiscalDriveService\config.ini"
$nssmPath = "C:\Program Files\FiscalDriveAPI\nssm.exe"

# 1. Настройка параметров службы (отключение TLS) через NSSM
if (Test-Path $nssmPath) {
    Write-Host "Configuring FiscalDriveAPI to run without TLS..."
    & $nssmPath set FiscalDriveAPI AppParameters "-mode api -log-level 5 -log - -no-tls"
}

# 2. Включение CORS в config.ini для FiscalDriveAPI
if (Test-Path $apiPath) {
    (Get-Content -Path $apiPath -Encoding UTF8) -replace '#cors_origin=http://example.com', 'cors_origin=*' | Set-Content -Path $apiPath -Encoding UTF8
    Restart-Service FiscalDriveAPI -Force
    Write-Host "FiscalDriveAPI CORS enabled, TLS disabled, and service restarted."
}

# 3. Включение CORS в config.ini для FiscalDriveService
if (Test-Path $srvPath) {
    (Get-Content -Path $srvPath -Encoding UTF8) -replace '#cors_origin=http://example.com', 'cors_origin=*' | Set-Content -Path $srvPath -Encoding UTF8
    Restart-Service FiscalDriveService -Force
    Write-Host "FiscalDriveService CORS enabled and service restarted."
}

Write-Host "All done! Checking service status..."
Get-Service -Name FiscalDriveAPI, FiscalDriveService

Write-Host "Done! You can close this window."
Start-Sleep -Seconds 8

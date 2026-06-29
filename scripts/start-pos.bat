@echo off
title POS Terminal Server
cd /d "%~dp0"

set PORT=80

echo ========================================
echo    POS Terminal v1.0 (Server Mode)
echo ========================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found!
    pause
    exit /b 1
)

echo Starting server on http://localhost:%PORT%
echo.
node ..\server\index.js

echo.
pause

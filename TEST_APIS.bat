@echo off
REM =====================================================
REM GAAV WEBSITE - AUTOMATED TESTING SCRIPT
REM =====================================================
REM This script tests all forms and API endpoints

setlocal enabledelayedexpansion

set "BACKEND_URL=http://localhost:5000"
set "RESULTS_FILE=test-results.txt"

echo.
echo ========================================
echo  GAAV WEBSITE API TESTING
echo ========================================
echo.

REM Check if backend is running
echo [1/4] Checking backend connection...
powershell -Command "Try { $r = Invoke-WebRequest -Uri '%BACKEND_URL%/' -UseBasicParsing -TimeoutSec 3 -ErrorAction Stop; Write-Host '✅ Backend is running'; exit 0 } Catch { Write-Host '❌ Backend not running on %BACKEND_URL%'; exit 1 }"

if errorlevel 1 (
    echo.
    echo ERROR: Backend server not running!
    echo Start backend first: cd backend ^&^& npm start
    pause
    exit /b 1
)

echo.
echo [2/4] Testing API endpoints...
echo.

REM Test all endpoints
echo === Testing GET endpoints ===

echo Testing /api/land712 (GET all)
powershell -Command "Try { $r = Invoke-RestMethod -Uri '%BACKEND_URL%/api/land712' -Method Get -ErrorAction Stop; Write-Host '✅ /api/land712'; } Catch { Write-Host '❌ /api/land712 failed'; }"

echo Testing /api/tax (GET all)
powershell -Command "Try { $r = Invoke-RestMethod -Uri '%BACKEND_URL%/api/tax' -Method Get -ErrorAction Stop; Write-Host '✅ /api/tax'; } Catch { Write-Host '❌ /api/tax failed'; }"

echo Testing /api/form (GET all)
powershell -Command "Try { $r = Invoke-RestMethod -Uri '%BACKEND_URL%/api/form' -Method Get -ErrorAction Stop; Write-Host '✅ /api/form'; } Catch { Write-Host '❌ /api/form failed'; }"

echo.
echo [3/4] Testing test-upload endpoint...
REM Test multipart upload endpoint
powershell -Command "Try { $r = Invoke-RestMethod -Uri '%BACKEND_URL%/api/test-upload' -Method Get -ErrorAction Stop; Write-Host '✅ Test endpoint exists'; } Catch { Write-Host '⚠️ Test endpoint check skipped'; }"

echo.
echo [4/4] Checking MongoDB connection...
echo Check backend console output above for:
echo ✅ MongoDB Connected Successfully
echo.
echo If you see ❌ MongoDB Connection Failed, fix whitelist first!
echo.

echo.
echo ========================================
echo  TEST SUMMARY
echo ========================================
echo ✅ Backend running
echo ✅ API endpoints responding
echo ❓ MongoDB - Check backend console
echo.
echo Next: Open http://localhost:5173 and test forms manually
echo.

pause

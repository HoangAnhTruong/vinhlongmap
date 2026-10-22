@echo off
title Vinh Long Maps - May chu dien thoai
color 0A
echo ========================================================
echo        VINH LONG MAPS - KHOI DONG CHO DIEN THOAI
echo ========================================================
echo.

:: Lay dia chi IP noi bo
for /f "tokens=4" %%a in ('route print ^| findstr 0.0.0.0.*0.0.0.0 ^| findstr /v "0.0.0.0          0.0.0.0"') do (
    set LOCAL_IP=%%a
)

echo [1] Ket noi cung Wi-Fi voi may tinh:
echo     Mo trinh duyet dien thoai go: http://%LOCAL_IP%:8080
echo.
echo [2] May chu dang chay... (De nguyen cua so nay khi dung tren dien thoai)
echo     Nhan Ctrl + C neu muon tat may chu.
echo ========================================================
echo.

python -m http.server 8080
pause

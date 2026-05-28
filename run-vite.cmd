@echo off
setlocal
cd /d C:\Users\khudo\Desktop\mlcommunity-uz
set "STDOUT=C:\Users\khudo\Desktop\mlcommunity-uz\vite.stdout.log"
set "STDERR=C:\Users\khudo\Desktop\mlcommunity-uz\vite.stderr.log"
if exist "%STDOUT%" del /f /q "%STDOUT%"
if exist "%STDERR%" del /f /q "%STDERR%"
start "vite" /b "C:\Users\khudo\Desktop\mlcommunity-uz\.tools\node\node.exe" "C:\Users\khudo\Desktop\mlcommunity-uz\node_modules\vite\bin\vite.js" --host 127.0.0.1 --port 5173 1>"%STDOUT%" 2>"%STDERR%"

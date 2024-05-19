chcp 65001

set JARS=lib\*;lib_ext\*
set MAIN_CLASS=ru.igis.scena.Starter
set OPTIONS=-Xmx1000M
set ENCODING=-Dfile.encoding=UTF-8

rem uncomment this to check correct classpath

rem echo %JARS%

rem java must be on your PATH variable or edit this to point on your JVM installation

taskkill /f /IM python.exe
cd NMEA_CACHE
rem python must be on your PATH variable or edit this to point on your Python3 installation
start /min python ..\nmea_cashe.py --port 8081
cd ..

java %OPTIONS% %ENCODING% -cp .;classes;%JARS%;src %MAIN_CLASS% pprj_examples/VRDashboardClient.pprj

taskkill /f /IM python3.exe


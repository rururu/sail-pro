chcp 65001

set JARS=lib\*;lib_ext\*;lib_pro\*;lib_clo\*
set MAIN_CLASS=ru.igis.scena.Starter
set OPTIONS=-Xmx1000M
set ENCODING=-Dfile.encoding=UTF-8

rem uncomment this to check correct classpath

rem echo %JARS%

rem java must be on your PATH variable or edit this to point on your JVM installation

taskkill /f /IM c:\php\php.exe
start c:\php\php -S localhost:8081 C:\Users\russor\clojure\sail-pro\NMEA_CACHE\router.php

java %OPTIONS% %ENCODING% -cp .;classes;%JARS%;src %MAIN_CLASS% pprj_examples/VRDashboardClient.pprj

taskkill /f /IM c:\php\php.exe

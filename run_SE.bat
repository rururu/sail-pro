chcp 65001

set JARS=lib\*;lib_ext\*;lib_cljs\*
set MAIN_CLASS=ru.igis.scena.Starter
set OPTIONS=-Xmx1000M
set ENCODING=-Dfile.encoding=UTF-8

rem uncomment this to check correct classpath

rem echo %JARS%

rem java must be on your PATH variable or edit this to point on your JVM installation

java %OPTIONS% %ENCODING% -cp .;classes;%JARS%;src %MAIN_CLASS% pprj_examples/SailExpert.pprj

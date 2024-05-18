#!/bin/sh

cd $(dirname $0)

JARS=lib/'*':lib_ext/'*'
MAIN_CLASS=ru.igis.scena.Starter
OPTIONS=-Xmx1000M
ENCODING=-Dfile.encoding=UTF-8
# CTRY=-Duser.country=RU
# LANG=-Duser.language=ru

# uncomment this to check correct classpath

# echo $JARS

# java must be on your PATH variable or change this to point your JVM installation

java $OPTIONS $ENCODING -cp .:classes:$JARS:src $MAIN_CLASS pprj_examples/SailExpert.pprj

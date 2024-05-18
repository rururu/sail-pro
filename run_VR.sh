#!/bin/sh

cd $(dirname $0)

JARS=lib/'*':lib_ext/'*'
MAIN_CLASS=ru.igis.scena.Starter
OPTIONS=-Xmx1000M
ENCODING=-Dfile.encoding=UTF-8

# uncomment this to check correct classpath

# echo $JARS

# python3 must be on your PATH variable or edit this to point on your Python3 installation

cd NMEA_CACHE
python3 ../nmea_cashe.py --port 8081 &
cd ..


# java must be on your PATH variable or change this to point your JVM installation

java $OPTIONS $ENCODING -cp .:classes:$JARS:src $MAIN_CLASS pprj_examples/VRDashboardClient.pprj

killall -KILL python3

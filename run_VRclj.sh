#!/bin/sh

cd $(dirname $0)

# python3 must be on your PATH variable or edit this to point on your Python3 installation

cd NMEA_CACHE
python3 ../nmea_cashe.py --port 8081 &
cd ..

clj -M:sail-pro

killall -KILL python3

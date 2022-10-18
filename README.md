# sail-pro

Simulation and modelling environment for virtual sailing.

![screenshot](1.png)

## Prerequisites

You need to be installed on your machine:

1. Java Runtime Environment version 11 and above.

2. [Git](https://git-scm.com/) (optional, you can download project from Github, button "Code" on project page)

4. [VR Dashboard](https://martinez58400.wixsite.com/navigationvirtuelle/vr-dashboard?lang=en)

5. Python3
    For Windows please check the Microsoft App store or download the installer [here](https://www.python.org/downloads/windows/)
        The location of python.exe will be determined using PATH variable.
    For others platforms please follow the instructions for your OS or download the tarball [here](https://www.python.org/downloads/)


## Installation

Download sail-pro from github:

```clj
$ cd <..>
$ git clone https://github.com/rururu/sail-pro.git     # optional, see above
$ cd sail-pro
```
## Usage

### 1. Project VR Dashboard Client

1. Open "Virual Regatta" page in a browser.
2. Activate "VR Dashboard" plugin. 
```diff
- If you encounter problems starting this plugin go first to VR Club House page (https://forum.virtualregatta.com/), 
- activate the plugin and then enter the game address (Ex. https://www.virtualregatta.com/en/offshore-game/) into addess string of the browser.
```
3. Select an active race. Check the race identificator on "Z VR Dashboard" tab and click a checkbox NMEA.
4. Start "sail-pro":

```clj
$ cd <..>/sail-pro
$ ./run_VR.sh 			# Linux, MacOS
$ .\run_VR.bat 	    	# Windows
```

5. Wait while programs will be loaded and expert system initialized (see a message in the terminal).

![screenshot](2.png)

6. Enter your boat name.
7. Wait while a panel popup 
8. Select a race on the popup panel, if needed (race number is on "Z VR Dashboard" tab).
9. Click "Start" on popup and wait while the boat jumps into current position.
10. Start a "Cesium server" on the popup panel.
11. Start a "Cesium client" on the popup panel.
12. Go on board of the boat.

See details in screencasts. Some details can be differen of earlier - these are deprecated!

[Normal start](https://youtu.be/Gg3DsVKulhY)

[Using binocular](https://www.youtube.com/watch?v=R0lmg-AfYIs)

[Start of Summer Cup race Miami - Cancun 10 july 2021](https://www.youtube.com/watch?v=UwYsDwf3jN0)

[Gibraltar in Vela Cup race](https://youtu.be/QsDpSx6kahg)

[Nearby yachts during Vela Cup race](https://youtu.be/57WU1qmrENQ)

[Skirting the western tip of Madeira in Vela Cup race](https://youtu.be/E_OxINj428U)

[Finish of Tara race in Iquique bay](https://www.youtube.com/watch?v=LYRTzwEeJqw)

[Sailing about Närsholmen cape on Gottland island during Nord Stream 3 race](https://www.youtube.com/watch?v=2kHoByWW9Zw)

[Rounding the turning mark on the island during the race Nord Stream 3](https://youtu.be/NTzE-a0fBQs)

13. Use controls to create nearby boats, give them names, coordinates, speed and course. 
    You can even create an aircraft carrier and control a helicopter or a fighter. 

[Interceptor Control](https://youtu.be/BMLnPYs6Tf8)

[Using Controls](https://youtu.be/pK9GTSEGQYQ)

[Get off a shallow in the Nord Stream Race 3](https://youtu.be/U5gG5pHpdcY)

14. Acquaintance with neighborhood using Wikipedia while virtually sailing.

[Using Wikipedia in races](https://youtu.be/GZFYdvlLbbw)

### 2. Project Sail Expert

1. Start sail-pro:

```clj
$ cd <..>/sail-pro
$ ./run_SE.sh 			# Linux, MacOS
$ .\run_SE.bat 	    	# Windows
```

See: [Sailing Expert](https://youtu.be/VG87r7_gVz8)

### 3. More videos

[Virtual Regatta Videos](https://github.com/rururu/sail-pro/tree/main/doc/vr_videos.md)

## FAQ

1. Quick start (run_VR.sh) sometimes fails.

   Use a longer start (run.sh or run.bat) with manual loading of programs and start of the expert system:
   Menu: Protege -> (clojure-work).
   
3. When we climb aboard, we find ourselves under water.

   Climb 100 meters (Elevation: 100) or more and then descend 4 meters.
   
4. Can we restart Sail-Pro without restarting VR and VRDashboard?

   Yes, you can. And vice versa too.
   
5. How to change Fleet visibility?
   
   Set a new "Fleet visibility" value and click "Modify Instance" button.
   
## Acknowledgement

Gratitude to Slava (a skipper of Viacheslavk) for the contribution of the data transfer program from VR Dashboard plugin and to VR Dashbord team.

## License

Copyright © 2021 FIXME

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.

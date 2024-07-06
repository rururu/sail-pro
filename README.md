# sail-pro

Simulation and modelling environment for virtual sailing.

[![Watch the video](1.png)](https://www.youtube.com/watch?v=uabntPNL_kc)
Click the screenshot to see a video!

_Simplified version: [https://github.com/rururu/VRShoreView](https://github.com/rururu/VRShoreView)_

## Prerequisites

You need to be installed on your machine:

1. Java Runtime Environment version 11 and above.

2. [Git](https://git-scm.com/) (optional, you can download project from Github, button "Code" on project page)

4. [VR Dashboard](https://chrome.google.com/webstore/search/VR%20Dashboard)

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
3. Start "sail-pro":

```clj
$ cd <..>/sail-pro
$ ./run_VR.sh 			# Linux, MacOS
$ .\run_VR.bat 	    	# Windows
```

4. Wait while programs will be loaded and expert system initialized (see a messages in the terminal).
5. If you start a new race, you will be asked for a boat name and a 3D boat model skin.
   In this case you can enter new boat name - your boat.
6. Wait until you see a view from a cockpit of the boat in a separate tab of the browser. 
   A chart view is in the program GUI.
7. In the end to save the input changes you should save a project. 

See details in screencasts. Some details can be differen of earlier - these are deprecated!

[Normal start](https://youtu.be/LNO3DLh5kLw)

[Additional skins for the boats](https://youtu.be/sIHWZAveyIg)

[Using binocular](https://youtu.be/tEdWtbOl-SQ)

8. Use controls to create nearby boats, give them names, coordinates, speed and course. 
    You can even create an aircraft carrier and control a helicopter or a fighter. 

[Interceptor Control](https://youtu.be/BMLnPYs6Tf8)

[Using Controls](https://youtu.be/pK9GTSEGQYQ)

[Get off a shallow in the Nord Stream Race 3](https://youtu.be/U5gG5pHpdcY)

9. Acquaintance with neighborhood using Wikipedia while virtually sailing.

[Using Wikipedia in races](https://youtu.be/GZFYdvlLbbw)

10. Boat tossing effect.

[Boat tossing control](https://youtu.be/27-_AhOrAg4)

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

## Used software

1. [Virtual Regatta online sailing simulator (offshore)](https://www.virtualregatta.com/en/offshore-game/)
2. [VR Dashboard Chrome extension](https://chrome.google.com/webstore/search/VR%20Dashboard)
3. [Protege ontology editor (version 3.5 - for frames)](https://protegewiki.stanford.edu/wiki/Protege_Desktop_Old_Versions)
4. [OpenMap GIS library](http://openmap-java.org/)
5. [CesiumJS JavaScript library](https://cesium.com/platform/cesiumjs/)
6. [rete4frames expert system shell](https://github.com/rururu/rete4frames)
7. [GeoNames geographical database](https://www.geonames.org/)
8. [Clojure programming language](https://clojure.org/)

## License

Copyright © 2021

This program and the accompanying materials are made available under the
terms of the Eclipse Public License 2.0 which is available at
http://www.eclipse.org/legal/epl-2.0.

This Source Code may also be made available under the following Secondary
Licenses when the conditions for such availability set forth in the Eclipse
Public License, v. 2.0 are satisfied: GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or (at your
option) any later version, with the GNU Classpath Exception which is available
at https://www.gnu.org/software/classpath/license.html.

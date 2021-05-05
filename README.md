# sail-pro

Simulation and modelling environment for virtual sailing.

![screenshot](1.png)

## Prerequisites

You need to be installed on your machine:

1. Java Runtime Environment

2. [Git](https://git-scm.com/) (optional, you can download project from Github, button "Code" on project page)

3. [Leiningen](https://leiningen.org/) or [CLJ tools](https://clojure.org/guides/getting_started)

3. [Python3](https://www.python.org/downloads/)

4. [VR Dashboard](https://martinez58400.wixsite.com/navigationvirtuelle/vr-dashboard?lang=en)


## Installation

Download sail-pro from github:

```clj
$ cd <..>
$ git clone https://github.com/rururu/sail-pro.git     # optional, see above
$ cd sail-pro
```
## Start with CLI tools

```clj
$ cd <..>/sail-pro
$ clj
Clojure 1.10.0
user=> (edu.stanford.smi.protege.Application/main (into-array String []))
```

## Start with Leiningen

```clj
$ cd <..>/sail-pro
$ lein run
```

## Usage

### 1. Project VR Dashboard Client

See: [Virtual Regatta](https://www.youtube.com/watch?v=LYRTzwEeJqw)

Note: Don't forget to check a checkbox NMEA on a Z VR Dashboard tab of a browser.

See: [Sailing about Närsholmen cape on Gottland island during Nord Stream 3 race](https://www.youtube.com/watch?v=2kHoByWW9Zw)

See: [Rounding the turning mark on the island during the race Nord Stream 3](https://youtu.be/NTzE-a0fBQs)

Now you can use controls to create nearby boats, give them names, coordinates, speed and course of real boats and enjoy real competition. You can even create aircraft carrier and to control helicopter or fighter. [Using Controls](https://youtu.be/pK9GTSEGQYQ)

### 2. Project Sail Expert

See: [Sailing Expert](https://youtu.be/VG87r7_gVz8)

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

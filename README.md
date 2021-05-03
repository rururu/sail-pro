# sail-pro

Simulation and modelling environment for virtual sailing.

![screenshot](1.png)

## Prerequisites

You need to be installed on your machine:

1. Java Runtime Environment

2. [Git](https://git-scm.com/)

3. [Leiningen](https://leiningen.org/) or [CLJ tools](https://clojure.org/guides/getting_started)

3. [Python3](https://www.python.org/downloads/)

4. [VR Dashboard](https://martinez58400.wixsite.com/navigationvirtuelle/vr-dashboard?lang=en)


## Installation

Download sail-pro from github:

```clj
$ cd <..>
$ git clone https://github.com/rururu/sail-pro.git
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

See [Virtual Regatta](https://www.youtube.com/watch?v=LYRTzwEeJqw)

Note: Don't forget to check a checkbox NMEA on a Z VR Dashboard tab of a browser.

See [Sailing about Närsholmen cape on Gottland island during Nord Stream 3 race](https://www.youtube.com/watch?v=2kHoByWW9Zw)

See [Sailing Expert](https://youtu.be/VG87r7_gVz8)

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

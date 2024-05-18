/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.structs.PriorityQueue");
goog.module.declareLegacyNamespace();
const Heap = goog.require("goog.structs.Heap");
class PriorityQueue extends Heap {
  enqueue(priority, value) {
    this.insert(priority, value);
  }
  dequeue() {
    return this.remove();
  }
}
exports = PriorityQueue;

;return exports;});

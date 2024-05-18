/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.debug.Error");
goog.module.declareLegacyNamespace();
function DebugError(msg = undefined, cause = undefined) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, DebugError);
  } else {
    const stack = (new Error()).stack;
    if (stack) {
      this.stack = stack;
    }
  }
  if (msg) {
    this.message = String(msg);
  }
  if (cause !== undefined) {
    this.cause = cause;
  }
  this.reportErrorToServer = true;
}
goog.inherits(DebugError, Error);
DebugError.prototype.name = "CustomError";
exports = DebugError;

;return exports;});

/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.net.XhrIoPool");
goog.require("goog.net.XhrIo");
goog.require("goog.structs.PriorityPool");
goog.requireType("goog.structs.Map");
goog.net.XhrIoPool = function(opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {
  this.headers_ = opt_headers;
  this.withCredentials_ = !!opt_withCredentials;
  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);
};
goog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);
goog.net.XhrIoPool.prototype.createObject = function() {
  const xhrIo = new goog.net.XhrIo();
  const headers = this.headers_;
  if (headers) {
    headers.forEach(function(value, key) {
      xhrIo.headers.set(key, value);
    });
  }
  if (this.withCredentials_) {
    xhrIo.setWithCredentials(true);
  }
  return xhrIo;
};
goog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {
  const xhr = obj;
  return !xhr.isDisposed() && !xhr.isActive();
};

/*TRANSPILED*//*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.provide("goog.structs.Set");
goog.require("goog.structs");
goog.require("goog.structs.Collection");
goog.require("goog.structs.Map");
goog.requireType("goog.iter.Iterator");
goog.structs.Set = function(opt_values) {
  this.map_ = new goog.structs.Map();
  this.size = 0;
  if (opt_values) {
    this.addAll(opt_values);
  }
};
goog.structs.Set.getUid_ = goog.getUid;
goog.structs.Set.getKey_ = function(val) {
  var type = typeof val;
  if (type == "object" && val || type == "function") {
    return "o" + goog.structs.Set.getUid_(val);
  } else {
    return type.slice(0, 1) + val;
  }
};
goog.structs.Set.prototype.getCount = function() {
  return this.map_.size;
};
goog.structs.Set.prototype.add = function(element) {
  this.map_.set(goog.structs.Set.getKey_(element), element);
  this.setSizeInternal_(this.map_.size);
};
goog.structs.Set.prototype.addAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.add(values[i]);
  }
  this.setSizeInternal_(this.map_.size);
};
goog.structs.Set.prototype.removeAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.remove(values[i]);
  }
  this.setSizeInternal_(this.map_.size);
};
goog.structs.Set.prototype["delete"] = function(element) {
  const rv = this.map_.remove(goog.structs.Set.getKey_(element));
  this.setSizeInternal_(this.map_.size);
  return rv;
};
goog.structs.Set.prototype.remove = function(element) {
  return this["delete"](element);
};
goog.structs.Set.prototype.clear = function() {
  this.map_.clear();
  this.setSizeInternal_(0);
};
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.size === 0;
};
goog.structs.Set.prototype.has = function(element) {
  return this.map_.containsKey(goog.structs.Set.getKey_(element));
};
goog.structs.Set.prototype.contains = function(element) {
  return this.map_.containsKey(goog.structs.Set.getKey_(element));
};
goog.structs.Set.prototype.containsAll = function(col) {
  return goog.structs.every(col, this.contains, this);
};
goog.structs.Set.prototype.intersection = function(col) {
  var result = new goog.structs.Set();
  var values = goog.structs.getValues(col);
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (this.contains(value)) {
      result.add(value);
    }
  }
  return result;
};
goog.structs.Set.prototype.difference = function(col) {
  var result = this.clone();
  result.removeAll(col);
  return result;
};
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues();
};
goog.structs.Set.prototype.values = function() {
  return this.map_.values();
};
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this);
};
goog.structs.Set.prototype.equals = function(col) {
  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);
};
goog.structs.Set.prototype.isSubsetOf = function(col) {
  var colCount = goog.structs.getCount(col);
  if (this.getCount() > colCount) {
    return false;
  }
  if (!(col instanceof goog.structs.Set) && colCount > 5) {
    col = new goog.structs.Set(col);
  }
  return goog.structs.every(this, function(value) {
    return goog.structs.contains(col, value);
  });
};
goog.structs.Set.prototype.__iterator__ = function(opt_keys) {
  return this.map_.__iterator__(false);
};
goog.structs.Set.prototype[Symbol.iterator] = function() {
  return this.values();
};
goog.structs.Set.prototype.setSizeInternal_ = function(newSize) {
  this.size = newSize;
};

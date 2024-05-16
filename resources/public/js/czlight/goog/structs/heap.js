/*TRANSPILED*/goog.loadModule(function(exports) {'use strict';/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
goog.module("goog.structs.Heap");
goog.module.declareLegacyNamespace();
const Node = goog.require("goog.structs.Node");
const object = goog.require("goog.object");
class Heap {
  constructor(opt_heap) {
    this.nodes_ = [];
    if (opt_heap) {
      this.insertAll(opt_heap);
    }
  }
  insert(key, value) {
    const node = new Node(key, value);
    const nodes = this.nodes_;
    nodes.push(node);
    this.moveUp_(nodes.length - 1);
  }
  insertAll(heap) {
    let keys, values;
    if (heap instanceof Heap) {
      keys = heap.getKeys();
      values = heap.getValues();
      if (this.getCount() <= 0) {
        const nodes = this.nodes_;
        for (let i = 0; i < keys.length; i++) {
          nodes.push(new Node(keys[i], values[i]));
        }
        return;
      }
    } else {
      keys = object.getKeys(heap);
      values = object.getValues(heap);
    }
    for (let i = 0; i < keys.length; i++) {
      this.insert(keys[i], values[i]);
    }
  }
  remove() {
    const nodes = this.nodes_;
    const count = nodes.length;
    const rootNode = nodes[0];
    if (count <= 0) {
      return undefined;
    } else if (count == 1) {
      nodes.length = 0;
    } else {
      nodes[0] = nodes.pop();
      this.moveDown_(0);
    }
    return rootNode.getValue();
  }
  peek() {
    const nodes = this.nodes_;
    if (nodes.length == 0) {
      return undefined;
    }
    return nodes[0].getValue();
  }
  peekKey() {
    return this.nodes_[0] && this.nodes_[0].getKey();
  }
  moveDown_(index) {
    const nodes = this.nodes_;
    const count = nodes.length;
    const node = nodes[index];
    while (index < count >> 1) {
      const leftChildIndex = this.getLeftChildIndex_(index);
      const rightChildIndex = this.getRightChildIndex_(index);
      const smallerChildIndex = rightChildIndex < count && nodes[rightChildIndex].getKey() < nodes[leftChildIndex].getKey() ? rightChildIndex : leftChildIndex;
      if (nodes[smallerChildIndex].getKey() > node.getKey()) {
        break;
      }
      nodes[index] = nodes[smallerChildIndex];
      index = smallerChildIndex;
    }
    nodes[index] = node;
  }
  moveUp_(index) {
    const nodes = this.nodes_;
    const node = nodes[index];
    while (index > 0) {
      const parentIndex = this.getParentIndex_(index);
      if (nodes[parentIndex].getKey() > node.getKey()) {
        nodes[index] = nodes[parentIndex];
        index = parentIndex;
      } else {
        break;
      }
    }
    nodes[index] = node;
  }
  getLeftChildIndex_(index) {
    return index * 2 + 1;
  }
  getRightChildIndex_(index) {
    return index * 2 + 2;
  }
  getParentIndex_(index) {
    return index - 1 >> 1;
  }
  getValues() {
    const nodes = this.nodes_;
    const rv = [];
    const l = nodes.length;
    for (let i = 0; i < l; i++) {
      rv.push(nodes[i].getValue());
    }
    return rv;
  }
  getKeys() {
    const nodes = this.nodes_;
    const rv = [];
    const l = nodes.length;
    for (let i = 0; i < l; i++) {
      rv.push(nodes[i].getKey());
    }
    return rv;
  }
  containsValue(val) {
    return this.nodes_.some(node => node.getValue() == val);
  }
  containsKey(key) {
    return this.nodes_.some(node => node.getKey() == key);
  }
  clone() {
    return new Heap(this);
  }
  getCount() {
    return this.nodes_.length;
  }
  isEmpty() {
    return this.nodes_.length === 0;
  }
  clear() {
    this.nodes_.length = 0;
  }
}
exports = Heap;

;return exports;});

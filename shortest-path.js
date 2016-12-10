"use strict";

var Set = require('es6-set/polyfill');

function Node() {

};

function Graph() {
  this.nodes = new Set();
  // map of nodes to array of nodes
  this.edges = [];
};

Graph.prototype.addNode = function(node) {
  this.nodes.add(node);
  this.edges.push({
    node: node,
    neighbours: new Set()
  });
};

Graph.prototype.findNeighbours = function(node) {
  for (let i = 0; i < this.edges.length; i++) {
    var obj = this.edges[i];
    if (obj.node === node) {
      return obj.neighbours;
    }
  }
  return null;
};

Graph.prototype.addEdge = function(node1, node2) {
  this.findNeighbours(node1).add(node2);
  this.findNeighbours(node2).add(node1);
};

Graph.prototype.findShortestPath = function(start, end) {

  var graph = this;

  // simply pairs a node with a length
  function LengthObject(node, length) {
    this.node = node;
    this.length = length;
  };

  LengthObject.prototype.less = function(lengthObject) {
    if (isNaN(this.length) && lengthObject.length === NaN) return false;
    if (isNaN(this.length)) return false;
    if (isNaN(lengthObject.length)) return true;
    return this.length < lengthObject.length;
  };

  var lengths = new Set();
  var node;

  for (node of this.nodes.values()) {
    lengths.add(new LengthObject(node, node === start ? 0 : NaN));
  }

  // nodes we have "visited"
  var visited = new Set();

  function visitedAll() {
    return visited.size === graph.nodes.size;
  };

  function findLengthObject(node) {
    for (let lengthObject of lengths.values()) {
      if (lengthObject.node === node) return lengthObject;
    }
    return NaN;
  };

  // while we have not visited all the nodes
  while (!visitedAll()) {

    // find the unvisited node with the smallest path length calculated so far
    var smallestLengthObject = null;
    for (let lengthObject of lengths.values()) {
      if (!visited.has(lengthObject)) {
        if (!smallestLengthObject || lengthObject.less(smallestLengthObject)) {
          smallestLengthObject = lengthObject;
        }
      }
    }

    // find the neighbors of x
    var neighbours = this.findNeighbours(smallestLengthObject.node);
    for (let neighbour of neighbours.values()) {
      // for each neighbour, update the length if it is
      // faster to get to the neighbour node from x
      var neighbourLengthObject = findLengthObject(neighbour);
      var lengthOfNeighbour = neighbourLengthObject.length;
      var lengthFromX = smallestLengthObject.length + 1;
      if (isNaN(lengthOfNeighbour) || lengthFromX < lengthOfNeighbour) {
        neighbourLengthObject.length = lengthFromX;
      }
    }

    // add x to `visited`
    visited.add(smallestLengthObject);

  }

  for (let lengthObject of lengths.values()) {
    if (lengthObject.node === end) return lengthObject.length;
  }

  return NaN;

};

var graph = new Graph();

var a = new Node();
var b = new Node();
var c = new Node();
var d = new Node();
var e = new Node();

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);

graph.addEdge(a, b);
graph.addEdge(b, c);
graph.addEdge(a, d);
graph.addEdge(d, e);
graph.addEdge(e, c);

var start = a;
var end = c;

console.log(graph.findShortestPath(start, end));

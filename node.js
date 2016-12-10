

function Node(str) {
  this.str = str;
  this.next = null;
  this.previous = null;
}

Node.prototype.toString = function() {
  return this.str + (this.next === null ? "" : this.next.toString());
};

var node1 = new Node("hello");
var node2 = new Node("world");

node1.next = node2;

console.log(node1.toString());

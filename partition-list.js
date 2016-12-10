function Node(value) {
  this.next = null;
  this.value = value;
}

// partition such that all nodes less than x come before
// node greater than or equal to x return new head of list
function partitionLinkedList(head, x) {

  if (head == null) return null;

  var lesserList = null;
  var greaterList = null;
  var lesserListTail = null;
  var greaterListTail = null;
  var node = head;


  while (node != null) {
    if (node.value < x) {
      if (lesserList == null) {
        lesserList = node;
      } else {
        lesserListTail.next = node;
      }
      lesserListTail = node;
    } else {
      if (greaterList == null) {
        greaterList = node;
      } else {
        greaterListTail.next = node;
      }
      greaterListTail = node;
    }
    node = node.next;
  }

  if (lesserList == null) {
    return greaterList;
  } else {
    lesserListTail.next = greaterList;
  }

  return lesserList;
}

var values = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
var nodes = [];
for (var value of values) {
  nodes.push(new Node(value));
}

for (var i = 0; i < nodes.length; i++) {
  if (i < nodes.length - 1) {
    nodes[i].next = nodes[i+1];
  }
}

var head = nodes[0];

head = partitionLinkedList(head, 5);

var node = head;
while (node !== null) {
  console.log(node.value);
  node = node.next;
}

function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function isBalanced(root) {

  function calculate(root) {

    if (root == null)
      return {
        depth: 0,
        balanced: true
      };

    var depth;
    var balanced = true;
    var left = calculate(root.left);
    var right = calculate(root.right);

    if (left.depth + 1 > right.depth + 1) {
      depth = left.depth + 1;
    } else {
      depth = right.depth + 1;
    }

    if (!left.balanced || !right.balanced) {
      balanced = false;
    } else if (Math.abs(left.depth - right.depth) > 1) {
      balanced = false;
    }

    return {
      depth: depth,
      balanced: balanced
    };
  };

  return calculate(root).balanced;

};


var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node4.left = node5;

console.log(isBalanced(node1));

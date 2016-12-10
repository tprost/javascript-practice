function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}



function maximumPathSum(root) {


  function calculateSum(root) {
    if (root == null)
      return {
        sum: 0,
        top: null
      };

    var leftResult = calculateSum(root.left);
    var rightResult = calculateSum(root.left);

    var sum;

    if (leftResult.top == root.left && rightResult.top == root.right) {

    }

  };



};

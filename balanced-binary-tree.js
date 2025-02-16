class node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class tree {
  constructor(inputArray) {
    this.root = this.buildTree(this.inputArray, 0, this.inputArray.length - 1);
    prettyPrint(this.root);
  }

  buildTree(inputArray, start, end) {
    if (start > end) return null;
    let mid = parseInt((start + end) / 2);
    let root = new node(inputArray[mid]);
    root.left = this.buildTree(inputArray, start, mid - 1);
    root.right = this.buildTree(inputArray, mid + 1, end);
    return root;
  }
}

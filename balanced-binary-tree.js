const NodeFactory = (data) => {
  data = data;
  left = right = null;
  return { data, left, right };
};

const TreeFactory = (arr) => {
  // Helper functions for sorting array & removing duplicates
  function compareNumbers(a, b) {
    return a - b;
  }

  function removeDups(arr) {
    let seen = {};
    let result = [];
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (seen[item] !== 1) {
        seen[item] = 1;
        result[j++] = item;
      }
    }
    return result;
  }

  // Sorts input array & remove duplicates
  let sortedArr = arr.sort(compareNumbers);
  let reducedArr = removeDups(sortedArr);

  // Builds balanced BST
  const buildTree = (arr, start, end) => {
    if (start > end) return null;

    let mid = parseInt((start + end) / 2);
    let node = NodeFactory(arr[mid]);

    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);

    return node;
  };

  let root = buildTree(reducedArr, 0, reducedArr.length - 1);

  // Inserts node of specific value into BST
  const insertNode = (root, value) => {
    let node = NodeFactory(value);
    if (!root) {
      root = node;
      return;
    }
    let prev = null;
    let current = root;
    while (current) {
      if (current.data > value) {
        prev = current;
        current = current.left;
      } else if (current.data < value) {
        prev = current;
        current = current.right;
      }
    }
    if (prev.data > value) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  };

  // Deletes node of specific value from BST
  const deleteNode = (root, value) => {
    if (root == null) return root;

    if (value < root.data) {
      root.left = deleteNode(root.left, value);
    } else if (value > root.data) {
      root.right = deleteNode(root.right, value);
    } else {
      if (root.left == null) {
        return root.right;
      } else if (root.right == null) {
        return root.left;
      }

      root.data = minValue(root.right);
      root.right = deleteNode(root.right, root.data);
    }
    return root;
  };

  // Helper function for deleteNode - returns smallest value in right branch
  function minValue(root) {
    let minVal = root.data;
    while (root.left != null) {
      minVal = root.left.data;
      root = root.left;
    }
    return minVal;
  }

  // Finds & returns node of specified value
  const find = (root, value) => {
    if (root == null) return root;

    if (value < root.data) {
      return find(root.left, value);
    } else if (value > root.data) {
      return find(root.right, value);
    } else {
      return root;
    }
  };

  // Traverses BST in breadth-first level order &
  // passes each node into specified callback f(x)
  // (otherwise returns array of visited nodes)
  const levelOrder = (root, func) => {
    let result = [];
    let q = [root];
    let node;

    while (q.length >= 1) {
      for (let i = 0; i < q.length; i++) {
        node = q.shift();
        if (node) {
          if (func) {
            func(node);
          } else {
            result.push(node.data);
          }
          q.push(node.left);
          q.push(node.right);
        }
      }
    }
    if (!func) {
      return result;
    }
  };

  // Traverses BST in depth-first preorder traversal &
  // passes each node into specified callback f(x)
  // (otherwise returns array of visited nodes)
  const preOrder = (root, func) => {
    if (root) {
      if (func) {
        func(root);
        if (root.left) preOrder(root.left, func);
        if (root.right) preOrder(root.right, func);
      } else {
        if (root == null) return;

        let result = [root.data]
          .concat(preOrder(root.left))
          .concat(preOrder(root.right));
        result = result.filter(function (element) {
          return element !== undefined;
        });

        return result;
      }
    }
  };

  // Traverses BST in depth-first in order traversal &
  // passes each node into specified callback f(x)
  // (otherwise returns array of visited nodes)
  const inOrder = (root, func) => {
    if (root) {
      if (func) {
        if (root.left) inOrder(root.left, func);
        func(root);
        if (root.right) inOrder(root.right, func);
      } else {
        if (root == null) return;

        let result = []
          .concat(inOrder(root.left))
          .concat(root.data)
          .concat(inOrder(root.right));
        result = result.filter(function (element) {
          return element !== undefined;
        });

        return result;
      }
    }
  };

  // Traverses BST in depth-first postorder traversal &
  // passes each node into specified callback f(x)
  // (otherwise returns array of visited nodes)
  const postOrder = (root, func) => {
    if (root) {
      if (func) {
        if (root.left) postOrder(root.left, func);
        if (root.right) postOrder(root.right, func);
        func(root);
      } else {
        if (root == null) return;

        let result = []
          .concat(postOrder(root.left))
          .concat(postOrder(root.right))
          .concat(root.data);
        result = result.filter(function (element) {
          return element !== undefined;
        });
        return result;
      }
    }
  };

  // Returns height of specified node
  const height = (root) => {
    if (root == null) return -1;

    let leftHt = height(root.left);
    let rightHt = height(root.right);

    return Math.max(leftHt, rightHt) + 1;
  };

  // Returns depth of specified node
  const depth = (root, node) => {
    if (root == null) return;

    let nodeDepth = 0;
    let current = root;
    while (current) {
      if (current.data > node.data) {
        nodeDepth++;
        current = current.left;
      } else if (current.data < node.data) {
        nodeDepth++;
        current = current.right;
      } else if (current.data == node.data) {
        return nodeDepth;
      } else {
        return 'Node could not be found.';
      }
    }
  };

  // Returns true if BST is balanced,
  // otherwise returns false
  const isBalanced = (root) => {
    if (root == null) return -1;

    let leftHt = height(root.left);
    let rightHt = height(root.right);

    leftHt = leftHt + 1;
    rightHt = rightHt + 1;

    let diff = leftHt - rightHt;

    if (diff > 1 || diff < -1) {
      return false;
    } else {
      isBalanced(root.left);
      isBalanced(root.right);
    }
    return true;
  };

  // Rebalances BST
  const rebalance = (root) => {
    let arr = inOrder(root);
    return TreeFactory(arr);
  };

  return {
    root,
    buildTree,
    insertNode,
    deleteNode,
    find,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    rebalance,
  };
};

// Print binary search tree to console
const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// Test script
// Step 1
console.log('1) Create a binary search tree from an array of random numbers');
let randomArr = Array.from({ length: 12 }, () =>
  Math.floor(Math.random() * 12)
);
console.log(`Random array: ${randomArr}`);
let newTree = TreeFactory(randomArr);
console.log(prettyPrint(newTree.root));

//Step 2
console.log('2) Confirm that the tree is balanced by calling isBalanced');
console.log(
  `newTree.isBalanced(newTree.root) = ${newTree.isBalanced(newTree.root)}`
);

// Step 3
console.log('3) Print out all elements in level, pre, post, and in order');
console.log(`Level: ${newTree.levelOrder(newTree.root)}`);
console.log(`Preorder: ${newTree.preOrder(newTree.root)}`);
console.log(`Postorder: ${newTree.postOrder(newTree.root)}`);
console.log(`In order: ${newTree.inOrder(newTree.root)}`);

// Step 4
console.log('4) Unbalance the tree by adding several numbers > 100');
newTree.insertNode(newTree.root, 200);
newTree.insertNode(newTree.root, 300);
newTree.insertNode(newTree.root, 400);
prettyPrint(newTree.root);

// Step 5
console.log('5) Confirm that the tree is unbalanced by calling isBalanced');
console.log(
  `newTree.isBalanced(newTree.root) = ${newTree.isBalanced(newTree.root)}`
);

// Step 6
console.log('6) Balance the tree by calling rebalance');
newTree = newTree.rebalance(newTree.root);
prettyPrint(newTree.root);

// Step 7
console.log('7) Confirm that the tree is balanced by calling isBalanced');
console.log(
  `newTree.isBalanced(newTree.root) = ${newTree.isBalanced(newTree.root)}`
);

// Step 8
console.log('8) Print out all elements in level, pre, post, and in order');
console.log(`Level: ${newTree.levelOrder(newTree.root)}`);
console.log(`Preorder: ${newTree.preOrder(newTree.root)}`);
console.log(`Postorder: ${newTree.postOrder(newTree.root)}`);
console.log(`In order: ${newTree.inOrder(newTree.root)}`);

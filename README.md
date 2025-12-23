# Binary Search Tree (BST) Implementation

A comprehensive **balanced binary search tree** implementation in JavaScript showcasing advanced tree data structures, traversal algorithms, and tree balancing techniques. This project demonstrates professional-grade data structure knowledge with complete functionality for tree operations.

## 🎯 Project Overview

This repository contains a complete Binary Search Tree implementation with 13 core methods covering insertion, deletion, searching, traversal, and balancing operations. The project includes a fully balanced tree factory that automatically maintains optimal tree structure and demonstrates deep understanding of data structures and algorithms.

## 📚 Core Data Structures

### Node Factory
```javascript
NodeFactory(data) → { data, left, right }
```
Creates individual tree nodes with data and pointers to left and right children.

### Tree Factory
A factory function that encapsulates the entire BST with the following methods:

## 🔧 Complete API

### Tree Building & Manipulation

#### `buildTree(arr, start, end)`
Constructs a **balanced binary search tree** from a sorted array using divide-and-conquer approach.
- **Time Complexity**: O(n) where n = array length
- **Space Complexity**: O(log n) for recursion stack
- **Features**: Automatically removes duplicates, sorts input

```javascript
const tree = TreeFactory([1, 3, 5, 7, 9, 11, 13]);
// Creates balanced tree with 7 at root, [1,3,5] left, [9,11,13] right
```

#### `insertNode(root, value)`
Inserts a new node with specified value while maintaining BST property.
- **Time Complexity**: O(log n) average, O(n) worst case
- **Use Case**: Adding new elements to existing tree

```javascript
tree.insertNode(tree.root, 6);
// Inserts 6 in correct position maintaining BST ordering
```

#### `deleteNode(root, value)`
Removes a node by value with three cases handled:
1. **Leaf node**: Direct removal
2. **One child**: Replace with child
3. **Two children**: Replace with in-order successor

- **Time Complexity**: O(log n) average, O(n) worst case

```javascript
tree.deleteNode(tree.root, 5);
// Removes node with value 5, maintains BST property
```

#### `find(root, value)`
Searches for and returns a node with specified value using binary search.
- **Time Complexity**: O(log n) average, O(n) worst case
- **Returns**: Node object or null if not found

```javascript
const node = tree.find(tree.root, 7);
console.log(node.data); // 7
```

### Tree Traversal Methods

All traversal methods support two modes:
1. **Callback function**: Execute function on each node
2. **Array return**: Return array of values in traversal order

#### `levelOrder(root, [func])`
**Breadth-First traversal** - visits nodes level by level.
- **Time Complexity**: O(n)
- **Space Complexity**: O(w) where w = max width

```javascript
tree.levelOrder(tree.root); 
// Returns: [7, 3, 11, 1, 5, 9, 13]

tree.levelOrder(tree.root, (node) => console.log(node.data));
// Executes callback for each node
```

#### `preOrder(root, [func])`
**Depth-First traversal** - Root → Left → Right.
- **Time Complexity**: O(n)
- **Use Case**: Copying tree structure

```javascript
tree.preOrder(tree.root);
// Returns: [7, 3, 1, 5, 11, 9, 13]
```

#### `inOrder(root, [func])`
**Depth-First traversal** - Left → Root → Right.
- **Time Complexity**: O(n)
- **Property**: Returns nodes in ascending sorted order
- **Use Case**: Getting sorted values from BST

```javascript
tree.inOrder(tree.root);
// Returns: [1, 3, 5, 7, 9, 11, 13] ← Sorted!
```

#### `postOrder(root, [func])`
**Depth-First traversal** - Left → Right → Root.
- **Time Complexity**: O(n)
- **Use Case**: Deleting entire tree safely

```javascript
tree.postOrder(tree.root);
// Returns: [1, 5, 3, 9, 13, 11, 7]
```

### Tree Analysis Methods

#### `height(root)`
Returns the height of a node (longest path to leaf).
- **Formula**: max(height(left), height(right)) + 1
- **Edge Case**: Null node returns -1

```javascript
tree.height(tree.root); // Height of entire tree
tree.height(tree.root.left); // Height of left subtree
```

#### `depth(root, node)`
Returns the depth of a node (distance from root).
- **Root depth**: 0
- **Use Case**: Finding how far a node is from root

```javascript
const node = tree.find(tree.root, 5);
tree.depth(tree.root, node); // Returns: 2
```

#### `isBalanced(root)`
Determines if tree is balanced (height difference ≤ 1 for all nodes).
- **Returns**: Boolean
- **Balanced tree properties**:
  - Better search performance (O(log n) guaranteed)
  - More efficient for frequent lookups

```javascript
tree.isBalanced(tree.root); // true or false
```

#### `rebalance(root)`
Transforms an unbalanced tree into a balanced one.
- **Method**: Performs in-order traversal, rebuilds from sorted array
- **Time Complexity**: O(n log n)
- **Returns**: New balanced tree

```javascript
const newTree = tree.rebalance(tree.root);
```

## 📊 Example Workflow

The project includes a complete test script demonstrating the full lifecycle:

```javascript
// 1. Create balanced tree from random array
let randomArr = Array.from({ length: 12 }, () => Math.floor(Math.random() * 12));
let newTree = TreeFactory(randomArr);

// 2. Verify it's balanced
console.log(newTree.isBalanced(newTree.root)); // true

// 3. Print all traversals
console.log(newTree.levelOrder(newTree.root));
console.log(newTree.preOrder(newTree.root));
console.log(newTree.inOrder(newTree.root));
console.log(newTree.postOrder(newTree.root));

// 4. Unbalance by adding large values
newTree.insertNode(newTree.root, 200);
newTree.insertNode(newTree.root, 300);
newTree.insertNode(newTree.root, 400);
console.log(newTree.isBalanced(newTree.root)); // false

// 5. Rebalance
newTree = newTree.rebalance(newTree.root);
console.log(newTree.isBalanced(newTree.root)); // true
```

## 🎓 Concepts Demonstrated

### Data Structures
- ✅ Binary Tree structure with node references
- ✅ Binary Search Tree properties and invariants
- ✅ Tree nodes with parent-child relationships
- ✅ Recursive tree traversal patterns

### Algorithms
- ✅ **Binary Search**: Fast lookup via divide-and-conquer
- ✅ **Tree Balancing**: AVL-like balancing for optimal performance
- ✅ **Recursion**: Multiple recursive algorithms
- ✅ **Traversal**: 4 different tree traversal methods
- ✅ **In-order traversal**: Returns sorted data

### Optimization
- ✅ O(log n) average search with balanced tree
- ✅ O(n) tree balancing
- ✅ O(h) height-based operations
- ✅ Queue-based level-order traversal

### Professional Practices
- ✅ Factory pattern for object creation
- ✅ Encapsulation of internal methods
- ✅ Helper functions for complex operations
- ✅ Clear separation of concerns
- ✅ Descriptive method names

## 💡 Real-World Applications

**Balanced Binary Search Trees** are fundamental to:
- Database indexing (B-trees in SQL databases)
- File systems (directory structures)
- Expression parsing in compilers
- Game AI (minimax algorithm for game trees)
- Network routing algorithms
- Autocomplete and search features
- Priority queues and heap implementations

## 🚀 Utility Function

#### `prettyPrint(node, prefix, isLeft)`
Visualizes the binary tree structure in console output.
```
    ┌── 13
┌── 11
│   └── 9
7
│   ┌── 5
└── 3
    └── 1
```

## 📈 Performance Characteristics

| Operation | Time Complexity | Space Complexity |
|-----------|-----------------|------------------|
| Build balanced tree | O(n log n) | O(log n) recursion |
| Insert | O(log n) avg | O(1) |
| Delete | O(log n) avg | O(log n) |
| Search | O(log n) avg | O(log n) |
| Traversal (any) | O(n) | O(h) |
| Rebalance | O(n log n) | O(log n) |
| Height | O(h) | O(h) |
| Depth | O(h) | O(h) |

## 🎯 Interview & Hiring Value

This project demonstrates:
1. **Advanced DSA Knowledge** - Complex tree operations
2. **Algorithm Optimization** - Balancing and traversal efficiency
3. **Recursion Mastery** - Multiple recursive implementations
4. **Code Organization** - Factory pattern and encapsulation
5. **Problem-Solving** - Handles all edge cases
6. **Professional Practices** - Clean, documented code

## 🔍 Code Quality

- **Functions**: 13 core methods
- **Lines of Code**: ~350 lines
- **Pattern**: Factory pattern with encapsulation
- **Documentation**: Inline comments for complex logic
- **Test Script**: Full workflow demonstration

## 📝 License

ISC License

---

**Repository**: [github.com/NabeelFarooq/binary-search-tree](https://github.com/NabeelFarooq/binary-search-tree)  
**Created**: Advanced data structures portfolio project  
**Purpose**: Interview preparation and portfolio demonstration
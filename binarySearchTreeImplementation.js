class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.traversals = {
      pre: "pre",
      post: "post",
      inOrder: "inOrder"
    }
  }
  /* 
    Will implement the following: 
    x insert(data)
    remove(data)
               
 
    Helper functions:
     x findMinNode()
     x getRootNode() - realized this isn't necessary
     x inorder(node)   \
     x preorder(node)   \___ Made these into one function w/ enum            
     x postorder(node) /
     x search(node, data)
  */

  // find the first node within the tree matching the given value
  // return false if not found
  search(searchVal, node = null) {
    if (!node) return false;
    if (node.val === searchVal) return node;
    if (searchVal < node.val) return this.search(searchVal, node.left);
    if (searchVal > node.val) return this.search(searchVal, node.right);
  }

  insertData(val) {
    const newNode = new Node(val);
    if (!this.root) return this.root = newNode;

    this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.val < node.val) {
      if (!node.left) return node.left = newNode;
      return this.insertNode(node.left, newNode);
    }
    if (newNode.val >= node.val) {
      if (!node.right) return node.right = newNode;
      return this.insertNode(node.right, newNode);
    }
  }

  // find the earliest node with empty left pointer 
  findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }

  traversal(node, order = "inOrder") {
    if (node) {
      if (order === this.traversals.pre) console.log(node.val)
      this.traversal(node.left, order);
      if (order === this.traversals.inOrder) console.log(node.val)
      this.traversal(node.right, order);
      if (order === this.traversals.post) console.log(node.val);
    }
  }

  // helper function - resets the root of the tree with the modified tree
  // returns false if tree isn't initialized
  remove(val) {
    if(!this.root) return false;
    this.root = this.removeNode(this.root, val);
    return this.root;
  }


  // remove a value from the tree, and update it
  removeNode(node, val) {
    if (node.val < val) return node.right = this.removeNode(node.right, val);
    if (node.val > val) return node.left = this.removeNode(node.left, val);
    if (!node.left && !node.right) return node = null;
    if (!node.left) return node = node.left;
    if (!node.right) return node = node.right;

    // case where both subnodes exist, find smallest node in right subtree and replace with that
    // delete the selected node by recursively calling removeNode() again
    const smallestRightNode = this.findMinNode(node.right);
    node.val = smallestRightNode.val;
    smallestRightNode.right = this.removeNode(node.right, smallestRightNode.val);
    return node;
  }
}

module.exports = { BinarySearchTree }
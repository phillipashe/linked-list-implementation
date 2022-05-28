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
  }
  /* 
    Will implement the following: 
    x insert(data)
    remove(data)
               
 
    Helper functions:
     x findMinNode()
     x getRootNode() - realized this isn't necessary
     inorder(node)
     preorder(node)              
     postorder(node)
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
}

module.exports = { BinarySearchTree }
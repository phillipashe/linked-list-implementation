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
     findMinNode()
     getRootNode()
     inorder(node)
     preorder(node)              
     postorder(node)
     search(node, data)
  */


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
}

module.exports = { BinarySearchTree }
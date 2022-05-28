const { BinarySearchTree } = require('./binarySearchTreeImplementation');
const nodeValues = require('./nodeValues.json');

const tree = new BinarySearchTree();

// build tree
for (val of nodeValues) tree.insertData(val); 
console.log(tree);

// trying out findMinNode()
const minNode = tree.findMinNode(tree.root);
console.log(minNode);

// test search()
const searchNode = tree.search(92, tree.root);
console.log(searchNode);
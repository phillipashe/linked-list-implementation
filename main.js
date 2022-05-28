const { BinarySearchTree } = require('./binarySearchTreeImplementation');
const nodeValues = require('./nodeValues.json');

const tree = new BinarySearchTree();

// build tree
for (val of nodeValues) tree.insertData(val); 
console.log(tree);
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // constrution
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // function to be implemented
  insert(key) {
    const newNode = new Node(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      // callback in the middle
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  // in order traversal
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      // callback at the beginning
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }
  // in order traversal
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      // callback at the end
      callback(node.key);
    }
  }
  // in order traversal
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }

  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    if (node === null) {
      return null;
    }
    while (node && node.left !== null) {
      node = node.left;
    }
    // return the value of the node
    return node.key;
  }

  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    if (node === null) {
      return null;
    }
    while (node && node.right !== null) {
      node = node.right;
    }
    // return the value of the node
    return node.key;
  }

  // search
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node === null) {
      return null;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    }
    if (key > node.key) {
      return this.searchNode(node.right, key);
    }
    if (key === node.key) return true;
  }

  remove(key) {
    return this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (!node) {
      return false;
    }
    if (key < node.key) {
      this.removeNode(node.left, key);
      return node;
    }
    if (key > node.key) {
      this.removeNode(node.right, key);
      return node;
    }
    if (key === node.key) {
      // need more deeper analysis
      // will do it next version
      delete node.key;
      return node;
    }
  }
  // return true or false
  // remove(key)

  // getRootNode()
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(12);
tree.insert(20);

//console.log(tree);

function printNode(value) {
  console.log(value);
}

console.log(tree.inOrderTraverse(printNode));
console.log(tree.preOrderTraverse(printNode));
console.log(tree.postOrderTraverse(printNode));
console.log(tree.min(printNode));
console.log(tree.max(printNode));
console.log(tree.search(10));
console.log(tree.remove(10));
console.log(tree.search(10));

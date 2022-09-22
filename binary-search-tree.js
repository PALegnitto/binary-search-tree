class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        // else if (val < current.right.val) {
        //   newNode.right = current.right;
        //   current.right = newNode;
        //   return this;
        // }
        // Did this at first to try and balance it, but this is unnecessary
        else {
          current = current.right;
        }
      }
      else if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        else {
          current = current.left;
        }
      }
    }
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    
    if(current === null) {
      let newNode = new Node(val);
      this.root = newNode;
      return this;
    }
    
    if(val > current.val) {
      if(current.right === null) {
        let newNode = new Node(val);
        current.right = newNode;
        return this;
      }
      return this.insertRecursively(val, current.right)
    }
    
    if(val < current.val) {
      if(current.left === null) {
        let newNode = new Node(val)
        current.left = newNode
        return this;
      }
      return this.insertRecursively(val, current.left)
    }
  }

  /** find(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    
    while(current) {
      if(val === current.val) return current;
      current = val > current.val ? current.right : current.left;
    }
  }

  /** findRecursively(val): Search the tree for a node with value val.
   * Return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if(node === null) return;
  
    if(val > node.val) {
      return this.findRecursively(val, node.right)
    }
    else if(val < node.val) {
      return this.findRecursively(val, node.left)
    }
    return node;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, valArray=[]) {
    if (node === null) return valArray;
    
    valArray.push(node.val);
    this.dfsPreOrder(node.left, valArray);
    this.dfsPreOrder(node.right, valArray);
    
    return valArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, valArray=[]) {
    if (node === null) return valArray;
    
    this.dfsInOrder(node.left, valArray);
    valArray.push(node.val);
    this.dfsInOrder(node.right, valArray);
    
    return valArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, valArray=[]) {
    if (node === null) return valArray;
    
    this.dfsPostOrder(node.left, valArray);
    this.dfsPostOrder(node.right, valArray);
    valArray.push(node.val);
    
    return valArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if(this.root === null) return [];
    
    let visited = [];
    let toVisitQueue = [this.root];
    
    while(toVisitQueue.length) {
      let current = toVisitQueue.shift();
      visited.push(current.val)
      
      if(current.left) toVisitQueue.push(current.left);
      if(current.right) toVisitQueue.push(current.right);
    }
    
    return visited;
  }
  
  /** findSuccessorNode(): Find the node with the next largest value.
   * Return successor node or undefined if not found. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = {
  BinarySearchTree,
  Node,
};

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const a = new Node('a')

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val)

    //define condition where root is null
    if (this.root === null) {
      this.root = newNode; //the new node becomes the root
    }

    else {
      //set up two pointers to keep track
      let current = this.root;

      while (current !== null) { //while current is not null
        //update parent
        //compare values
        //if you hit a null then attach the new node there
        if (newNode.val < current.val) //if the value of newNode is less than the value of current node we want to move left
        {
          if (current.left === null) {
            current.left = newNode;
          } else {
            current = current.left;
          }
        }
        if (newNode.val > current.val) //then we move right
        {
          if (current.right === null) {
            current.right = newNode;
          }
          else {
            current = current.right;
          }
        }
      }



      return this;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    //base case is if the current node is null
    if (node === null) return new Node(val);

    //recursive case
    if (val < node.val) //go left
    {
      node.left = this.insertRecursively(val, node.left)
    }
    if (val > node.val) {
      node.right = this.insertRecursively(val, node.right)
    }

    return node;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */
  find(val) {
    let current = this.root;

    while (current !== null) {
      if (current.val === val) return current;

      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }


  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return undefined;

    if (node.val === val) return node;

    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }


  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    }

    traverse(this.root);
    return result;
  }


  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.val);
    }

    traverse(this.root);
    return result;
  }


  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const result = [];
    const queue = [];

    if (this.root !== null) queue.push(this.root);

    while (queue.length) {
      const node = queue.shift();
      result.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return result;
  }


  // /** Further Study!
  //  * remove(val): Removes a node in the BST with the value val.
  //  * Returns the removed node. */

  // remove(val) {

  // }

  // /** Further Study!
  //  * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  // isBalanced() {

  // }

  // /** Further Study!
  //  * findSecondHighest(): Find the second highest value in the BST, if it exists.
  //  * Otherwise return undefined. */

  // findSecondHighest() {

  // }
}

module.exports = BinarySearchTree;

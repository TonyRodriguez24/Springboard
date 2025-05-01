class BinarySearchNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    find(sought) {
        let currentNode = this;
        while (currentNode) {
            console.log('Visiting ' + currentNode.val)
            if (currentNode.val === sought) return currentNode;
            if (currentNode.val > sought) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

const a = new BinarySearchNode('A');
const b = new BinarySearchNode('B');
const c = new BinarySearchNode('C');
const d = new BinarySearchNode('D');
const e = new BinarySearchNode('E');
const f = new BinarySearchNode('F');
const g = new BinarySearchNode('G');

e.left = b;
e.right = g;
b.left = a;
b.right = d;
g.left = f;

class BinarySearchTree{
    constructor(root=null) {
        this.root = root;
    }
    traverse(node = this.root) {
        console.log(node.val)
        if(node.left) this.traverse(node.left);
        if(node.right) this.traverse(node.right);
    }
}

const tree = new BinarySearchTree(e)
console.log(e.find('D'))

console.log(tree.traverse())
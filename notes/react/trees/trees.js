class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    findDepthFirstSearch(val) {
        const toVisitStack = [this];
        while (toVisitStack.length) {
            const current = toVisitStack.pop();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitStack.push(child);
            }
        }
    }
    //searching horizontally almost
    //removing from beginning
    findBreadthFirstSearch(val) {
        const toVisitQueue = [this];
        while (toVisitQueue.length) {
            const current = toVisitQueue.shift();
            if (current.val === val) {
                return current;
            }
            for (let child of current.children) {
                toVisitQueue.push(child);
            }
        }
    }
}

//each node itself is a tree
class BinaryNode {
    constructor(value, left = null, right = null) {
        
    }
}

//binary search tree
//min max heap
//quad trees
//octo trees

//bidirectional trees = each child has reference to parent and parent has reference to children
// class Node{
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const firstPage = new Node('google.com')
// const secondPage = new Node('reddit.com')
// const thirdPage = new Node('amazon.com')

// firstPage.next = secondPage;
// secondPage.next = thirdPage;

// console.log(firstPage)
// console.log(secondPage)

class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    traverse() {
        let currentNode = this.head;
        while (currentNode) { //as long as head isnt null
            console.log(currentNode.val) 
            currentNode = currentNode.next //updates the current value to next value
        }

    }
    find(val) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.val === val) return true;
            currentNode = currentNode.next
        }
        return false;
    }
    append(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
}

const train = new LinkedList();
train.append('Engine')
train.append('Freight Car 1')
train.append('Freight Car 2')

console.log(train.traverse())
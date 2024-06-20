class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }

    // push is adding element at the end of a list
    push(value){
        const newNode = new Node(value);
        // if  linkedList is empty 
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        // if linkedList is not empty
        this.tail.next = newNode;
        this.tail = newNode;
        this.length = this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(3);
myLinkedList.push(4)
console.log(myLinkedList)

/**
 * Output: 
 * {
    "head": {
        "value": 3,
        "next": {
            "value": 4,
            "next": null
        }
    },
    "tail": {
        "value": 4,
        "next": null
    },
    "length": 2
}
 */
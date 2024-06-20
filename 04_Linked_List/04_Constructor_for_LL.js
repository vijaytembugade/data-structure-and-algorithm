// this is Node constructore which will be like 
/**
 * {
 *  value: 3,
 *  next:  null
 * }
 */
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}


/**
 * This is linkedlist class where node is being used and also head and tail is pointing to the same node.
 * also we maintain the length of list with initilal value 1
 */

class LinkedList{
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
}

const myLinkedList = new LinkedList(3);
console.log(myLinkedList) 
/**
 * Output: 
 * {
    "head": {
        "value": 3,
        "next": null
    },
    "tail": {
        "value": 3,
        "next": null
    },
    "length": 1
}

This represet the initial nod eof linked list which points towars same node.
 */
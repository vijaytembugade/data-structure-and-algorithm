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

    push(value){
        const newNode = new Node(value);
        // if our linkedList is empty 
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        // if linkedList is not empty
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){
        // if head is not there then return undefined;
        if(!this.head){
            return this;
        }

        // point two pointer to the node where head is pointing
        let temp = this.head;
        let pre = this.head;
        
        // iterate over list until temp.next is null, and add one more pointer pre,
        // which is pointer one previous node temp is pointing. 
        while(temp.next !== null){
            pre = temp;
            temp = temp.next;
        }

        // when temp.next == null
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        // when length is 0
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        };
        return this;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(4)
myLinkedList.push(7)
myLinkedList.push(8)
console.log(myLinkedList)
myLinkedList.pop()
myLinkedList.pop()
console.log(myLinkedList)

/**
 * {
    "head": {
        "value": 1,
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
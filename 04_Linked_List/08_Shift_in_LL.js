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
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(){
        if(!this.head){
            return this;
        }

        let temp = this.head;
        let pre = this.head;
        
        while(temp.next !== null){
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if(this.length === 0){
            this.head = null;
            this.tail = null;
        };
        return this;
    }

    unShift(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return this;
        }
        
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    /**Shift : Remove element from the first of LL */

    
    shift(){
        // if LL is empty
        if(!this.head){
            return undefined;
        }
        // temp pointing to first node
        const temp = this.head;
        // make head point to second node
        this.head = this.head.next;
        // first node's next will be null
        temp.next = null;
        this.length--;
        // returning the removed node

        return temp;
    }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(4)
myLinkedList.push(7)
myLinkedList.push(8)
console.log(myLinkedList.shift())
console.log(myLinkedList.shift())
console.log(myLinkedList)

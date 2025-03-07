/*
  Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.
  Note: this LinkedList implementation does not have a length member variable.
  Output:
  Return the kth node from the end of the linked list.
  If the value of k is greater than or equal to the number of nodes in the list, return null.

  HINT: 
  1. Initialize slow pointer to the head of the list
  2. Initialize fast pointer to the head of the list
  3. Loop from 0 to k-1
     a. If fast pointer is null, return null (k is larger than the list length)
     b. Move fast pointer one step ahead in the list
  4. Loop while fast pointer is not null
     a. Move slow pointer one step ahead in the list
     b. Move fast pointer one step ahead in the list
  5. Return slow pointer (kth node from the end found)
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    findKthFromEnd(k){
        let fast = this.head;
        let slow = this.head;
        
        for(let i = 0; i < k ;i++){
            if(fast === null){
                return null
            }
            fast = fast.next
        }
        
        while(fast !== null){
            fast = fast.next;
            slow = slow.next;
        }
        
        return slow
        
    }
}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const k = 2;
const kthNodeFromEnd = myLinkedList.findKthFromEnd(k);

console.log(`\n${k}th node from the end:`);
if (kthNodeFromEnd) {
    console.log(kthNodeFromEnd.value);
} else {
    console.log("Not found");
}



/*
  Write a method called hasLoop that is part of the linked list class.
  The method should be able to detect if there is a cycle or loop present in the linked list.

  Pseudo Code:

1. Initialize slow pointer to the head of the list

2. Initialize fast pointer to the head of the list

3. Loop while fast pointer is not null and fast pointer's next node is not null

   a. Move slow pointer one step ahead in the list

   b. Move fast pointer two steps ahead in the list

   c. Check if slow pointer and fast pointer are the same

      i. If yes, return true (loop found)

4. Return false (loop not found)

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
        this.tail = newNode;
        this.length = 1;
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

    getLength() {
        console.log("Length: " + this.length);
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
        this.length++;
    }
    
    hasLoop(){
        let slow = this.head;
        let fast = this.head;
        while(fast !== null && fast.next !== null ){
            
            fast = fast.next && fast.next.next ? fast.next.next : null;
            slow = slow.next;
            
            if(fast === slow){
                return true
            }
        }
        return false
    }

}



let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const hasLoopResult = myLinkedList.hasLoop();
console.log(`\nHas loop? ${hasLoopResult}`);

// Create a loop for testing purposes
myLinkedList.tail.next = myLinkedList.head.next; // Create a loop by linking tail to the second node

const hasLoopResultAfterLoop = myLinkedList.hasLoop();
console.log(`\nHas loop after creating a loop? ${hasLoopResultAfterLoop}`);



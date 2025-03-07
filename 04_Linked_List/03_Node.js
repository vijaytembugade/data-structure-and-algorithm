/**
 * what a Node made up of in linked List?
 * -> Node is made of value and pointer to next value
 */

// Node is basically object which has a properties of value and pointer

const node1 = {
    value: 1,
    next: null
}

// Another node
const node2 = {
    value: 2,
    next: null
}

// more Another node 
const node3 = {
    value: 3,
    next: null
}

/**
 * Above three nodes are individual node but what is we connect the node and assign the next of each node to the next node
 * node1-> node2-> node3
 */

const listOfNodes = {
    head: {
        //this is node1 
        value: 1,
        next: {
            // this is node2
            value: 2,
            next: {
                // this is node3
                value : 3, 
                next: tailNode // -----> tail pointer
            },
        }
    }
}

// In above next of each node pointing to the another node.
// This is how the linkedlist looks like , here what we are missing is head and tail pointer 

const tailNode = {
    // this is node3
    value: 4,
    next: null
    // in this object we will have tail pointer; 
}

const tail = tailNode;

//--------------------------------------------------------------------

//NODE CONSTRUCTOR 
class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}
/**
 * this is value Node constructore which will be like 
 * {
 *  value: 3,
 *  next:  null
 * }
 */
// we need a node 
class Node{
  constructor(value){
    this.value =  value
    this.next = null
  }

}

class Queue{
  constructor(value){
    const newNode = new Node(value);
    this.first = newNode
    this.last = newNode
    this.length = 1
  }

  enQueue(value){
  const newNode = new Node(value)
    if(this.length === 0){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    console.log(newNode)
    return this;
  }

  dequeue() {
         if(this.length === 0) return undefined
         let temp = this.first
         if(this.length === 1) {
             this.last = null
         } else {
             this.first = this.first.next
             temp.next = null
         } 
         this.length--
         console.log(temp) 
         return temp
     } 

}


let q = new Queue(3)
q.enQueue(6)
q.enQueue(9)
q.enQueue(13)
q.dequeue()
console.log(q)





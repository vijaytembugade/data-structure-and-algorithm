class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Stack{
  constructor(value){
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1
  }

  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode
    }else{
    newNode.next = this.top;
    this.top = newNode
    }
    this.length++;
    console.log(newNode)
    return this;
  }

  pop(value){
    if(this.length === 0) return undefined;

    let temp = this.top;
    this.top = this.top.next;
    temp.next = null

    this.length -- 
    return temp
  }

}

let myStack = new Stack(36)
myStack.push(25)
myStack.push(19)
myStack.push(2)
myStack.pop()
myStack.pop()

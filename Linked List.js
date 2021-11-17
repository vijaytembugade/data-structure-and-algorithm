class Node{
  constructor(value){
    this.value = value
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

  //push - to add in node
  push(value){
    const newNode = new Node(value)
    if(this.head === null ){
      this.head = newNode;
      this.tail = newNode
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this
  }

  //pop - to remove from last
  // extra variables required - pre & temp 
  // one loop
  pop(){
  if(this.head === null ){
    return "List is empty"
  }
  let temp = this.head;
  let pre = this.head;
  while(temp.next !== null){
    pre = temp
    temp = temp.next
  }

  this.tail = pre;
  this.tail.next= null;
  this.length --;
  if(this.length === 0){
    this.head = null;
    this.tail =null;  
  }
  console.log(temp)
  return temp;
  }

  // unshift - to add at beginning of a node
  addAtStart(value){
    const newNode = new Node(value);
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;

    }
    this.length ++;
    console.log(newNode)
    return this;
  }

  //shift - to remove from the begining
  removeFromBegining(){
    if(this.head === null){
      return undefined
    }else{
      let temp = this.head; 
      this.head = this.head.next;
      temp.next = null;
     
      if(this.length === 0){
        this.tail =null;
        this.head = null
      }
      console.log(temp)
    }
    this.length --
    return this;
  }

  //get value from index passed
  // extra variable -  temp
  getValue(index){
    if(index < 0 || index >= this.length){
      return undefined
    }
      let temp = this.head;
      for(let i = 0; i < index ; i++ ){
        temp = temp.next;
      }

    // console.log(temp)
    return temp;
  } 

  //set value
  //extra variable - temp
  setValue(index, value){
    
    let temp = this.getValue(index)
    if(temp){
    temp.value = value;
    return true
    }

    return false

  }

  // insert a node in between
  insert(index, value){
    if(index === 0 ){
      return this.addAtStart(value)
    }if(index = this.length){
      return this.push(value)
    }if(index < 0 || index > this.length){
      return false
    }
      const newNode = new Node(value)
      let temp = this.getValue(index-1)
      newNode.next = temp.next ;
      temp.next = newNode;
      this.length ++;
      return true
  }

  // remove in between
  // variables - temp, before
  remove(index){
    if(index < 0 || index >= this.length )
    return undefined
    if(index === 0)
      return this.shift();
    if(index === this.length )
    return this.pop()
    let before = this.get(index - 1);
    let temp = before.next ;
    before.next = temp.next;
    temp.next = null
    this.length -- 
    return temp
  }

  // reverse the list
  // variable - temp, prev, next
  reverse(){
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp.next;
    let prev = null

    for(let i = 0; i< this.length; i++){
    temp.next = prev;
    prev = temp;
    temp = next
  }
  
  return this;
  }
}



let list =new  LinkedList(25)
console.log("//Pushing in a list")
list.push(10)
list.push(5)
list.push(6)

console.log("__________________________")
console.log("//Removing from the ending(poping) ")
// list.pop()
// list.pop()
// list.pop()
// list.pop()

console.log("__________________________")
console.log("//to add at beginning" )
// list.addAtStart(36)
// list.addAtStart(96)

console.log("__________________________")
console.log("//remove from beginning")
// list.removeFromBegining()
// list.removeFromBegining()
// list.removeFromBegining()

console.log("__________________________")
console.log("// get value by index")
list.getValue(2)

console.log("__________________________")
console.log("// set value")
// list.setValue(3, 85)
// console.log(list)


console.log("__________________________")
console.log("// inserted")
// list.insert(2, 63)



console.log("__________________________")
console.log("// reverse")
// list.reverse()

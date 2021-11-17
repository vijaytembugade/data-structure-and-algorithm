class Node {
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null
  }
}


class DLinkedList {
  constructor(value){
    let newNode = new Node(value)
    this.head = newNode;
    this.tail = newNode;

    this.length = 1
  }

  //push inside the List
  push(value){
    const newNode = new Node(value)
    if(!this.head){
      this.head = newNode;
      this.tail = newNode
    }
    else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this
  }

  //it removes last value
  pop(){
    if(this.length === 0 )
    return undefined
    let temp = this.tail;
    if(this.length === 1){
      this.head =null;
      this.tail = null;
    }else{
    this.tail = this.tail.prev;
    this.tail.next = null
    temp.prev = null
    }
  
    this.length--;
    return temp;
  }

  //add from front
  unshift(value){
    const newNode = new Node(value)
    if(this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode
    }
    this.length++;
    return this;
  }

  //remove from front
  shift(){
    if(this.length === 0) return undefined
    let temp = this.head;
    if(this.length === 1){
        this.head = null
        this.tail = null
        this.length --;
        return temp
    }else{
        this.head = this.head.next;
        this.head.prev = null
        temp.next = null
    }
    this.length--;
    return temp
  }

  //get value through index
  get(index){
    if(index< 0 || index >= this.length){
      return undefiend;
    }
    let temp = this.head ;
    if(index < this.length/2){
    for(let i = 0; i < index ; i++){
      temp = temp.next;
    }
    }else{
      temp = this.tail
      for(let i = this.length-1 ; i > index ; i--){
      temp = temp.prev;
    }
    }

    return temp
  }

  //set a value at a index
  set(index, value){
    let temp = this.get(index)
    if(temp){
      temp.value = value
      return true
    }
    return false
  }

  insert(index, value){
    if(index === 0){
      return this.unshift(value)
    }
    if(index === this.length){
      return this.push(value)
    }
    if(index < 0 || index > this.length) return false
    
    const newNode = new Node(value)
    const before = this.get(index - 1)
    const after = before.next;

    before.next = newNode;
    newNode.prev = before
    after.prev = newNode;
    newNode.next = after
    this.length++;
    return true    
  }

  remove(index){
    if(index === 0){
      return this.shift()
    }
    if(index === this.length){
      return this.pop()
    }
    if(index < 0 || index > this.length) return false

    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.prev = null;
    temp.next = null;

    this.length--;
    return temp; 
  }
}


let list =new DLinkedList(25);
list.push(36)
list.push(49)
list.push(64)

// list.pop()
// list.pop()
// list.pop()

// list.unshift(10)
// list.shift()
// list.shift()
// list.shift()
// list.shift()
// list.shift()
// console.log(list)

// list.set(1, 6)
// list.insert(0,3)
// list.remove(2)



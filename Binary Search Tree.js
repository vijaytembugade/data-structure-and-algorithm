class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
  constructor(){
    this.root = null
  }

  //insert the value inside BST
  insert(value){
    const newNode = new Node(value)
    if(this.root === null){
      this.root = newNode
      return this
    }
    let temp = this.root;
    while(true){
      if(newNode.value === temp.value){
        return undefined
      }
      if(newNode.value < temp.value){
        if(temp.left === null){
          temp.left = newNode;
          return this
        }else{
        temp = temp.left
        }
      }else if(newNode.value > temp.value){
        if(temp.right === null){
          temp.right = newNode;
          return this
        }else{
          temp = temp.right
        }
      }
    }
  }

  //Contains function check whether the given value is present in tree or not and it returns true or false

  contains(value){
    if(this.root  === null ) return false;
    let temp = this.root
    while(temp){
      if(value < temp.value){
        temp = temp.left
      }else if(value > temp.value){
        temp = temp.right
      }else if(value === temp.value){
        return true
      }
    }
    return false
  }

  //minimum value in BST
  minValueNode(currentNode){
    while(currentNode.left !== null){
      currentNode = currentNode.left
    }
    console.log(currentNode)
    return currentNode;
  }
}

let bst = new BST;
bst.insert(47)
bst.insert(76)
bst.insert(21)
bst.insert(10)
bst.insert(60)
bst.insert(80)
bst.insert(23)
bst.contains(80)
bst.minValueNode(bst.root.right)
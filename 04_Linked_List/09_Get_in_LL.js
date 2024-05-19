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
    
    shift(){
        if(!this.head){
            return undefined;
        }
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    get(index){
        if(index < 0 || index > this.length){
            return undefined;
        }
        let temp = this.head;
        for(let i=0; i < index; i++){
          temp = temp.next;
        }
        return temp;
    }

    set(index, value){
        const temp = this.get(index);
        if(temp){
            temp.value =  value;
        }
        return this;
    }


}

const myLinkedList = new LinkedList(1);
myLinkedList.push(4)
myLinkedList.push(7)
myLinkedList.push(8)
console.log(myLinkedList.get(0))
console.log(myLinkedList.get(1))


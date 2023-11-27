class LinkedList{
    constructor(){
        this.listHead = null
    }

    prepend(value){
        let tmp = null
        if(this.listHead != null){
            tmp = this.listHead
        }
        this.listHead = new Node(value)
        this.listHead.nextNode = tmp

    }

    append(value){
        if(this.listHead == null ){
            this.prepend(value)
        }else{
            let tmp = this.listHead
            while(tmp.nextNode != null){
                tmp = tmp.nextNode
            }
            tmp.nextNode = new Node(value)
        }
    }

    size(){
        let tmp = this.listHead
        let counter = 0
        while(tmp != null){
            counter++
            tmp = tmp.nextNode
        }
        return counter
    }

    head(){
        return this.listHead
    }

    tail(){
        let tmp = this.listHead
        while(tmp.nextNode != null){
            tmp = tmp.nextNode
        }
        return tmp
    }

    at(index){
        let tmp = this.listHead
        for(let i = 0; i < index; i++){
            tmp = tmp.nextNode;
            if(tmp == null){
                return 'There is no item for this index'
            }
        }
        return tmp
    }

    pop(){
        let cur = this.listHead
        let prev = null;
        while(cur.nextNode != null){
            prev = cur;
            cur = cur.nextNode
        }
        prev.nextNode = null
    }

    contains(value){
        let tmp = this.listHead
        while (tmp !=null){
            if(tmp.value === value){
                return true
            }
            tmp = tmp.nextNode
        }
        return false
    }

    find(value) {
        let tmp = this.listHead;
        let index = 0;
        while (tmp != null) {
          if (tmp.value === value) return index;
          tmp = tmp.nextNode;
          index++;
        }
        return null;
      }
    
    toString() {
        let tmp = this.listHead;
        let stringList = "";
        while (tmp != null) {
          stringList += `(${tmp.value}) -> `;
          tmp = tmp.nextNode;
        }
        return (stringList += "null");
      }
    
}

class Node {
    constructor(value){
        this.value = value || null;
        this.nextNode = null;
    }
}

const myLinkedList = new LinkedList()

myLinkedList.prepend('salut')
myLinkedList.append('salt')
myLinkedList.append('buna')
myLinkedList.append('saa')

console.log(JSON.stringify(myLinkedList))
console.log(myLinkedList.size())
console.log(myLinkedList.head())
console.log(myLinkedList.tail())
console.log(myLinkedList.at(3))
console.log(myLinkedList.pop())
console.log(JSON.stringify(myLinkedList))

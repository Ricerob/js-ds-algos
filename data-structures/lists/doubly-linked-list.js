class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    get val() {
        return this.val;
    }
}

class DoublyLinkedList {
    constructor(start) {
        this.head = start;
        this.tail = start;
        this.head.prev = null;
        this.head.next = null;
        this.tail.prev = null;
        this.tail.next = null;
        this.num = 1;
    }

    get head() {
        return this.head
    }

    get tail() {
        return this.tail
    }

    append(node) {
        if(this.num === 0){
            this.head = node;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.num++;
    }

    delete() {
        if(this.num === 0){
            print('Linked list is empty.')
            return
        }
        else if(this.num === 1) {
            this.tail = null;
            this.head = null;
        }
        else {
            let temp = this.tail.prev;
            temp.next = null;
            this.tail = temp;
        }
        this.num--;
    }
}
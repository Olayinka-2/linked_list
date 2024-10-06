class LinkedList {
   head = null;
   size = 0;
}

class Node {
   constructor(data) {
      this.data = data;
      this.next = null;
   }
}

LinkedList.prototype.prepend = function(value) {
   if(this.head === null) {
      this.head = new Node(value);
   } else {
      const temp = this.head;
      this.head = new Node(value);
      this.head.next = temp;
   }
   this.size++;
}

LinkedList.prototype.append = function(value) {
   if(this.head === null) {
      this.head = new Node(value);
      this.size++;
      return;
   }

   let currentHead = this.head;

   while(currentHead.next !== null) {
      currentHead = currentHead.next;
   }

   currentHead.next = new Node(value);

   this.size++;
}

LinkedList.prototype.sizes = function() {
   return this.size;
}

LinkedList.prototype.headItem = function() {
   return this.head;
}

LinkedList.prototype.tailItem = function() {
   let currentHead = this.head;

   while(currentHead.next !== null) {
      currentHead = currentHead.next
   }

   return currentHead;
}

let man = new LinkedList();
man.append(3);
man.append(4);
man.prepend(5);
// console.log(man.headItem());
console.log(man.tailItem());
// console.log(man);

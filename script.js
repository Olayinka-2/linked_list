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

LinkedList.prototype.at = function(number) {
   let currentHead = this.head;
   let count = 0;

   if(number == 0) {
      return currentHead.data;
   }

   while(true) {
      currentHead = currentHead.next;
      count++;

      if(count == number) {
         break;
      }
   }
   return currentHead.data;
}

LinkedList.prototype.pop = function() {
   let currentHead = this.head;

   if(this.size == 1) {
      this.head = null;
      this.size--;
      return;
   }

   while(currentHead.next.next !== null) {
      currentHead = currentHead.next;
   }
   currentHead.next = currentHead.next.next;
   this.size--;
}


let man = new LinkedList();
man.append(3);
man.append(4);
man.prepend(5);
// console.log(man.headItem());
// console.log(man.tailItem());
// man.pop();
// console.log(man.at(4));
console.log(man);

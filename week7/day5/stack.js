'use strict';
class Stack {
  size;
  elements = [];
  constructor(size) {
    this.size = size;
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  isFull() {
    return this.elements.length === this.size;
  }
  push(element) {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }
  pop() {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
    }
    this.elements.pop();
  }
}
let numbers2 = new Stack(5);
numbers2.push(9);
numbers2.push(9);
numbers2.push(9);
console.log(numbers2.isEmpty());
numbers2.push(9);
numbers2.push(9);
console.log(numbers2.isFull());

console.log(numbers2.isEmpty());
numbers2.pop();
numbers2.pop();
console.log(numbers2.isFull());
numbers2.pop();
numbers2.pop();
numbers2.pop();
console.log(numbers2.isEmpty());

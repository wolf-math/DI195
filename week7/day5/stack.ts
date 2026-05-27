class Stack<T> {
  private elements: T[] = [];

  constructor(private size: number) {}

  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  isFull(): boolean {
    return this.elements.length === this.size;
  }

  push(element: T): void {
    if (this.elements.length === this.size) {
      throw new Error('The stack is overflow!');
    }
    this.elements.push(element);
  }

  pop(): void {
    if (this.elements.length == 0) {
      throw new Error('The stack is empty!');
    }

    this.elements.pop();
  }
}

let numbers2 = new Stack<number>(5);

numbers2.push(9);

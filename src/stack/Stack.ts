export class Stack<T> {
  private readonly dataStore: T[];
  private readonly size: number;

  constructor(size = 100) {
    this.dataStore = [];
    this.size = size;
  }

  public isEmpty() {
    return this.dataStore.length === 0;
  }

  public push(element: T) {
    if (this.isFull()) {
      throw new StackFullError();
    }

    this.dataStore.push(element);
  }

  public pop() {
    return this.dataStore.pop();
  }

  public top() {
    return this.dataStore[this.dataStore.length - 1];
  }

  public isFull() {
    return this.dataStore.length === this.size;
  }
}

export class StackFullError extends Error {}

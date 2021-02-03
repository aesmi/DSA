class Stack<T> {
  private _collection: T;
  private _length: number;
  private _top: number;
  constructor() {
    [this._length, this._collection] = [0, <T>{}];
    for (let key in arguments) {
      // put into map to optimize access, delete time
      this._collection[key] = arguments[key];
      length++;
    }
    this._top = this._length - 1;
  }
  isEmpty(): boolean {
    return this._length === 0;
  }
  print(): void {
    console.log(this._collection);
  }
  push(element: any) {
    this._collection[this._length] = element;
    this._length++;
    return element;
  }
  pop(): Error | (() => any) {
    if (this.isEmpty()) {
      return Error("Empty Stack");
    } else {
      const removalTarget = this._collection[this._length - 1];
      delete this._collection[this._length - 1];
      this._length--;
      return removalTarget;
    }
  }
  peek(i: number): T {
    if (this.isEmpty()) throw new Error("Stack Empty");
    return this._collection[i];
  }
  bottom(): T {
    return this._collection[0];
  }
  lid(): T {
    return this._collection[this._top];
  }
  clear(): void {
    for(let key in this._collection){
      delete this._collection[key];
    }
  }
}

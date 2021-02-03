type Pointer = number;

class Queue<T> {
  private _length: Pointer;
  private _collection: T;
  private _endPtr: Pointer;
  constructor() {
    [this._length, this._collection] = [0, <T>{}];
    for (let key in arguments) {
      // put into map to optimize access, delete time
      this._collection[key] = arguments[key];
      length++;
    }
    this._endPtr = this._collection._length - 1;
  }
  
  print = (): void => console.log(this._collection);
  enqueue = (val: any): void => {
    this._collection.push(val);
    this._endPtr += 1;
  };
  dequeue = (): Error | (() => any) =>
    this._collection.length == (0 || undefined)
      ? Error("Underflow")
      : (): any => {
          this._endPtr -= 1;
          this._collection.shift();
        };
  //peeks at (i)th item in queue
  peek = (i: number) => this._collection[i - 1];
  //peeks at first item in queue
  front = () =>
    this.isEmpty()
      ? Error("This queue is empty")
      : console.log(this._collection[0]);
  //peeks at last element in queue
  end = (): Error | void =>
    this.isEmpty()
      ? Error("This queue is empty")
      : console.log(this._collection[this._endPtr]);
  isEmpty = (): boolean => this._collection._length === 0;
  clear = (): void => {
    this._collection._length = 0;
    this._endPtr = 0;
  };
}

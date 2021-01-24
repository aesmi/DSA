type Pointer = number;

class Queue<T> {
  collection: T[];
  endPtr: Pointer;
  constructor(args: Array<any>) {
    this.collection = [...args];
    this.endPtr = this.collection.length - 1;
  }
  print = (): void => console.log(this.collection);
  enqueue = (val: any): void => {
    this.collection.push(val);
    this.endPtr += 1;
  };
  dequeue = (): Error | (() => any) =>
    this.collection.length == (0 || undefined)
      ? Error("Underflow")
      : (): any => {
          this.endPtr -= 1;
          this.collection.shift();
        };
  //peeks at (i)th item in queue
  peek = (i: number) => this.collection[i - 1];
  //peeks at first item in queue
  front = () =>
    this.isEmpty()
      ? Error("This queue is empty")
      : console.log(this.collection[0]);
  //peeks at last element in queue
  end = (): Error | void =>
    this.isEmpty()
      ? Error("This queue is empty")
      : console.log(this.collection[this.endPtr]);
  isEmpty = (): boolean => this.collection.length === 0;
  clear = (): void => {
    this.collection.length = 0;
    this.endPtr = 0;
  };
}

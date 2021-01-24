class Stack {
  collection: Array<any>;
  top: number;
  constructor(args: Array<any>) {
    this.collection = [...args];
    this.top = this.collection.length - 1;
  }
  print = (): void => console.log(this.collection);
  push = (val: any): number => this.collection.push(val);
  pop = (): Error | (() => any) =>
    this.isEmpty() ? Error("Underflow") : this.collection.pop();
  //peeks at (i)th item in queue
  peek = (i: number): Error | (() => any) =>
    this.isEmpty() ? Error("Underflow") : this.collection[i];
  //peeks at first item in queue
  front = (): any => this.collection[0];
  lid = (): any => this.collection[this.top];
  isEmpty = (): boolean => this.collection.length === 0;
  clear = (): void => {
    this.collection.length = 0;
    this.top = 0;
  };
}

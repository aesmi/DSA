class Stack {
  collection: any;
  length: number;
  top: number;
  constructor() {
    [this.length, this.collection]=[0,{}];
    for (let key in arguments){
      // put into map to optimize access, delete time
      this.collection[key] = arguments[key];
      length++;
    }
    this.top = this.collection.length - 1;
  }
  isEmpty():boolean{
    return this.collection.length === 0;
  }
  print():void{
    console.log(this.collection);
  }
  push(element:any){
    this.collection[this.length] = element;
    this.length++;
    return element;
  }
  pop():Error|(()=>any){
    if(this.isEmpty()){
      return Error("Empty Stack");
    } else {
      const removalTarget = this.collection[this.length-1];
      delete this.collection[this.length-1];
      this.length--;
      return removalTarget;
    }
  }
  peek(i:number): Error | (() => any){
    this.isEmpty()?Error("Stack Empty"):this.collection[i];
  }
  bottom():any{
    this.collection[0];
  }
  lid():any{
    this.collection[this.top];
  }
  clear():void{
    this.collection.clear();
  }
}

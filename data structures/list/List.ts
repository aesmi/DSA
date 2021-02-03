class List{
    private length: any;
    private objects: any;
    constructor(){
        [this.length, this.objects]=[0,{}];
        for (let key in arguments){
            // put into map to optimize access, delete time
            this.objects[key] = arguments[key];
            length++;
        }
    }
    static isMyArray(value){
        // the instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 
        return value instanceof List;   
    }
    at(index:number){
        return this.objects[index];
    }
    push(element:any){
        this.objects[this.length] = element;
        this.length++;
        return element;
    }
    pop(){
        const removalTarget = this.objects[this.length-1];
        delete this.objects[this.length-1];
        this.length--;
        return removalTarget;
    }
    shift(){
        const removalTarget = this.objects[0];
        for (let i=0; i<this.length-1; i++){
            this.objects[i] = this.objects[i+1];
        }
        delete this.objects[this.length-1];
        this.length--;
        return removalTarget;
    }
    unshift(){
        const shiftAmount = Object.keys(arguments).length;
        for (let i = this.length -1; i>=0; i--){
            this.objects[i+shiftAmount] = this.objects[i];
        }
        for (const key in arguments){
            this.objects[key] = arguments[key];
            this.length++;
        }
        return this.length;
    }
}
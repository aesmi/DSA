class Stack{
    constructor(maxSize, arguments){
        if (isNaN(maxSize)) {
            maxSize = 10;
        }
        this.collection = [...arguments];
    }
    print = () => { console.log(collection); };
    push = (val) => collection.push(val);
    pop = () => {
        // removing top element from stack
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.collection.pop(); 
    };
    //peeks at (i)th item in queue
    peek = (i) => collection[i-1];
    //peeks at first item in queue
    front = () => collection[0];
    end = () => collection[1];
    isEmpty = function () {
        return collection.length === 0;
    };
    clear = () => collection.length = 0;;
}

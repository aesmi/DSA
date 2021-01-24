class Queue {
    constructor(maxSize, arguments) {
        if (isNaN(maxSize)) {
            maxSize = 10;
        }
        this.collection = [...arguments];
    }
    print = () => { console.log(collection); };
    enqueue = (val) => collection.push(val);
    dequeue = () => {
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if (this.isEmpty())
            return "Underflow";
        return this.collection.shift();
    };
    //peeks at (i)th item in queue
    peek = (i) => this.collection[i - 1];
    //peeks at first item in queue
    front = () => {
        if (this.isEmpty()) {
            throw Error("This queue is empty");
        } else {
            console.log(this.collection[0]);
        }
    }
    end = () => {
        front = () => {
            if (this.isEmpty()) {
                throw Error("This queue is empty");
            } else {
                console.log(this.collection[maxSize - 1]);
            }
        }
    };
    isEmpty = () => this.collection.length === 0;
    clear = () => this.collection.length = 0;;
}

// Access = O(1)
// Search = O(1)
// Insert = O(logn)
// Delete = O(logn)

interface QElement {
  priority: number;
}

class QElement implements QElement {
  element: any;
  priority: number;
  constructor(element: any, priority: number) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue<QElement> {
  collection: QElement[];
  constructor() {
    this.collection = [];
  }
  isEmpty = (): boolean => (this.collection.length == 0 ? true : false);
  print = (): void => console.log(this.collection);
  enqueue = (element: any, priority: number): void => {
    // creating object from queue element
    let qElement = new QElement(element, priority);
    let contain = false;
    // iterating through the entire item array to add element at the correct location of the Queue
    for (var i = 0; i < this.collection.length; i++) {
      //checks to see new element priority is lower than iterated item priority
      if (this.collection[i].priority > qElement.priority) {
        // Once the correct location is found it is
        // enqueued
        this.collection.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }
    // if the element have the highest priority
    // it is added at the end of the queue
    if (!contain) {
      this.collection.push(qElement);
    }
  };
  dequeue = () => {
    if (this.isEmpty()) {
      throw Error("This queue is empty");
    } else {
      this.collection.shift()[0];
    }
  };
  size = () => this.collection.length;
  front = () => {
    if (this.isEmpty()) {
      throw Error("This queue is empty");
    } else {
      console.log(this.collection[0]);
    }
  };
}

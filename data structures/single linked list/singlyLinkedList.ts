class NewNode<T> {
  private _elem: T;
  public _next: T;

  constructor(elem) {
    this._elem = elem;
    this._next = null;
  }
}

class LinkedList {
  private _head = null;
  private _length = 0;

  public append(elem) {
    let node = new NewNode(elem);
    let current;

    if (this._head === null) {
      this._head = node;
    } else {
      current = this._head;
      // while a next exists, recursively assign our next node's elem to our current node
      // once the end is reach, assign out elem to our new node
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this._length++;
  }
  public removeAt(pos) {
    // if index exists and is below our length
    if (pos > -1 && pos < this._length) {
      let current = this._head;
      let previous: NewNode<number | string>;
      let index = 0;

      if (pos === 0) {
        this._head = current._next;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }
        previous._next = current._next;
      }
      // reduce our length by one and return our current element
      this._length--;
      return current.elem;
    } else {
      return null;
    }
  }
  public insert(elem, pos) {
    if (pos > -1 && pos < this._length) {
      let current = this._head;
      let index = 0;
      let previous;
      let node = new NewNode(elem);

      if (pos === 0) {
        node._next = current;
        this._head = node;
      } else {
        while (index++ < pos) {
          previous = current;
          current = current.next;
        }
        node._next = current;
        previous.next = node;
      }
      this._length++;
      return true;
    } else {
      return false;
    }
  }

  public toString() {
    let current = this._head;
    let str = "";
    while (current) {
      str += JSON.stringify(current.elem); //output is undefinedundefinedundefined
      // str += JSON.stringify(current);
      // prints out {"next":{"next":{}}}{"next":{}}{}
      current = current.next;
    }
    return str;
  }
}

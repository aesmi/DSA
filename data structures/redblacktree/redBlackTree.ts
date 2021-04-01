// enum for our colors
enum Color {
  RED,
  BLACK,
}

class Node {
  public parent: Node;
  public left: Node;
  public right: Node;

  public color: Color = Color.BLACK;

  public leftMost(): Node {
    var node = this;
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  public rightMost(): Node {
    var node = this;
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  public predecessor(): Node {
    if (this.left !== null) {
      return this.left.rightMost();
    }
    var child = this;
    var node = child.parent;
    while (node !== null && child === node.left) {
      child = node;
      node = child.parent;
    }
    return node;
  }

  public successor(): Node {
    if (this.right !== null) {
      return this.right.leftMost();
    }
    var child = this;
    var node = child.parent;
    while (node !== null && child === node.right) {
      child = node;
      node = child.parent;
    }
    return node;
  }

  public _copyMetadata(srcNode: Node) {
    this.color = srcNode.color;
  }
}

class Tree {
  public root: Node = null;

  public first(): Node {
    return this.root === null ? null : this.root.leftMost();
  }

  public last(): Node {
    return this.root === null ? null : this.root.rightMost();
  }

  public insertBefore(newNode: Node, refNode: Node) {
    if (refNode === null) {
      var lastNode = this.last();
      if (lastNode === null) {
        this.insertNode(newNode);
      } else {
        this.insertAfter(newNode, lastNode);
      }
    } else {
      if (refNode.right === null) {
        this.insertNode(newNode, refNode, true);
      } else {
        this.insertNode(newNode, refNode.left.rightMost(), true);
      }
    }
  }

  public insertAfter(newNode: Node, refNode: Node) {
    if (refNode === null) {
      var firstNode = this.first();
      if (firstNode === null) {
        this.insertNode(newNode);
      } else {
        this.insertBefore(newNode, firstNode);
      }
    } else {
      if (refNode.right === null) {
        this.insertNode(newNode, refNode, false);
      } else {
        this.insertNode(newNode, refNode.right.leftMost(), true);
      }
    }
  }

  private insertNode(
    newNode: Node,
    parentNode: Node = null,
    leftOrRight: boolean = false
  ) {
    if (parentNode === null) {
      this.root = newNode;
    } else {
      if (leftOrRight) {
        parentNode.left = newNode;
      } else {
        parentNode.right = newNode;
      }
    }
    newNode.parent = parentNode;
    newNode.color = Color.RED;
    this.fixInsert(newNode);
  }

  private fixInsert(node: Node) {
    var parent = node.parent;
    if (parent === null) {
      node.color = Color.BLACK;
      return;
    }

    if (parent.color === Color.BLACK) {
      return;
    }

    var grandparent = parent.parent;
    var uncle =
      parent === grandparent.left ? grandparent.right : grandparent.left;

    if (uncle !== null && uncle.color === Color.RED) {
      parent.color = Color.BLACK;
      uncle.color = Color.BLACK;
      grandparent.color = Color.RED;
      this.fixInsert(grandparent);
      return;
    }

    if (node === parent.right && parent === grandparent.left) {
      this.leftRotate(parent);
      parent = node;
      node = node.left;
      grandparent = parent.parent;
    } else if (node === parent.left && parent === grandparent.right) {
      this.rightRotate(parent);
      parent = node;
      node = node.right;
      grandparent = parent.parent;
    }

    parent.color = Color.BLACK;
    grandparent.color = Color.RED;

    if (node === parent.left && parent === grandparent.left) {
      this.rightRotate(grandparent);
    } else {
      this.leftRotate(grandparent);
    }
  }

  public removeNode(node: Node) {
    this.deleteNode(node);
  }

  private deleteNode(node: Node) {
    if (node.left !== null && node.right !== null) {
      var nextNode = node.right.leftMost();
      this.deleteNode(nextNode);
      this.replaceNode(node, nextNode);
      nextNode.left = node.left;
      if (nextNode.left !== null) {
        nextNode.left.parent = nextNode;
      }
      nextNode.right = node.right;
      if (nextNode.right !== null) {
        nextNode.right.parent = nextNode;
      }
      nextNode._copyMetadata(node);
      return;
    }

    var child = node.left !== null ? node.left : node.right;
    this.replaceNode(node, child);

    if (node.color === Color.BLACK && child !== null) {
      if (child.color === Color.RED) {
        child.color = Color.BLACK;
      } else {
        this.fixDeleteOneChild(child);
      }
    }
  }

  private fixDeleteOneChild(node: Node) {
    if (node.parent === null) {
      return;
    }

    var parent = node.parent;
    var sibling = node === parent.left ? parent.right : parent.left;

    if (sibling.color === Color.RED) {
      parent.color = Color.RED;
      sibling.color = Color.BLACK;
      if (node === parent.left) {
        this.leftRotate(parent);
        sibling = parent.right;
      } else {
        this.rightRotate(parent);
        sibling = parent.left;
      }
    }

    var slb = sibling.left === null || sibling.left.color === Color.BLACK;
    var srb = sibling.right === null || sibling.right.color === Color.BLACK;

    if (sibling.color === Color.BLACK && slb && srb) {
      sibling.color = Color.RED;
      if (parent.color === Color.RED) {
        parent.color = Color.BLACK;
      } else {
        this.fixDeleteOneChild(parent);
      }
      return;
    }

    if (node === parent.left) {
      if (srb) {
        sibling.color = Color.RED;
        sibling.left.color = Color.BLACK;
        this.rightRotate(sibling);
        sibling = sibling.parent;
      }
    } else {
      if (slb) {
        sibling.color = Color.RED;
        sibling.right.color = Color.BLACK;
        this.leftRotate(sibling);
        sibling = sibling.parent;
      }
    }

    sibling.color = parent.color;
    parent.color = Color.BLACK;

    if (node === parent.left) {
      if (sibling.right !== null) {
        sibling.right.color = Color.BLACK;
      }
      this.leftRotate(parent);
    } else {
      if (sibling.left !== null) {
        sibling.left.color = Color.BLACK;
      }
      this.rightRotate(parent);
    }
  }

  private leftRotate(node: Node) {
    var temp = node.right;
    this.replaceNode(node, temp);
    node.right = temp.left;
    if (node.right !== null) {
      node.right.parent = node;
    }
    temp.left = node;
    node.parent = temp;
  }

  private rightRotate(node: Node) {
    var temp = node.left;
    this.replaceNode(node, temp);
    node.left = temp.right;
    if (node.left !== null) {
      node.left.parent = node;
    }
    temp.right = node;
    node.parent = temp;
  }

  private replaceNode(oldNode: Node, newNode: Node) {
    var parent = oldNode.parent;

    if (newNode !== null) {
      newNode.parent = parent;
    }

    if (parent === null) {
      this.root = newNode;
    } else {
      if (oldNode === parent.left) {
        parent.left = newNode;
      } else {
        parent.right = newNode;
      }
    }
  }
}

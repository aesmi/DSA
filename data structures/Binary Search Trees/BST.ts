class TreeNode {
  right: TreeNode | undefined;
  left: TreeNode | undefined;
  constructor(public value: number) {}
}

class Tree {
  head: TreeNode | undefined;
  insert(node: TreeNode, current: TreeNode = this.head): any {
    if (this.head == undefined) {
      this.head = node;
      return;
    }
    if (current.value == node.value) return current;
    // if value is larger than our current node value, append our node to the right
    if (current.value > node.value) {
      if (current.right) {
        return this.insert(node, current.right);
      } else {
        current.right = node;
        return;
      }
    }
    // if value is smaller than our current node value, append our node to the left
    if (current.value < node.value) {
      if (current.left) {
        return this.insert(node, current.left);
      } else {
        current.right = node;
        return;
      }
    }
  }
}

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right; // sets a path to left and right nodes - both null for a newly created node
  }
}

class BST {
  constructor() {
    this.root = null; // sets root node 
  }
  add(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data) // if there is no node in the tree yet - it adds the root node using the above template
      return;
    } else { // if there are nodes in the tree
      const searchTree = function(node) { 
        if (data < node.data) { // if the data we pass in is less than node.data, that means we put the node on the left side of the tree
          if (node.left === null) { // if there is no node to the left of the previous node - and we are placing on the left - we create a new node and place it
            node.left = new Node(data);
            return
          } else if (node.left !== null) { // if there is a node to the left of the previous node - we recursively call this function and compare integers till we find the right spot
            return searchTree(node.left);
          }
        } else if (data > node.data) { // if the data we pass in is greater than node.data, that means we put the node on the right side of the tree
          if (node.right === null) {  // if there is no node to the right of the previous node - and we are placing on the right - we create a new node and place it
            node.right = new Node(data); 
            return;
          } else if (node.right !== null) { // if there is a node to the left of the previous node - we recursively call this function and compare integers till we find the right spot
            return searchTree(node.right); 
          }
        } else {
          return null;
        }
      };
      return searchTree(node); // searchTree is called with a node being searched - used to find where to 'add' inside the .add function
    }
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  isPresent(data) {
    let current = this.root; // sets current node as root
    while (current) { // while there IS a current node / while current is NOT null
      if (data === current.data) { // checks if current node is target data
        return true;
      }
      if (data < current.data) { // if target data is less than current node's data, we move left and the function block checks 'while current' again
        current = current.left;
      } else {
        current = current.right; // same as above - but greater than/right side
      }
    }
    return false;
  }
  remove(data) {
    const removeNode = function(node, data) { // pass in node, and data you want removed
      if (node === null) { // if the tree is empty, return null
        return null;
      }
      if (data === node.data) { // if correct node
        if (node.left === null && node.right === null) { // if node has no children
          return null; // setting node that had target/delete data to 'null' effectively deleting it
        }
        if (node.left === null) { // if node has no left child
          return node.right; // moving the right child up one, replacing current node with the right node, effectively deleting the current node
        }
        if (node.right === null) { // if node has no right child
          return node.left; // moving the left child up one, replacing current node with the left node, effectively deleting the current node
        }
        // if node has two children
        var tempNode = node.right; // have to go to the right subnode, then furthest down-left             8                  8
        while (tempNode.left !== null) {//                                                                / \                / \ 
          tempNode = tempNode.left; // tempNode goes all the way down to the most left node     remove-> 3  14     -->      4  14
        } //                                                                                               / \                / \
        node.data = tempNode.data // sets current/removed node to furthest left down node                 1   6              1   6
        node.right = removeNode(node.right, tempNode.data) //                                                / \                  \
        return node; //                                                         you have to replace with -> 4   7                  7
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data) // call removeNode recursively
  }
}
export default class Tree {
  constructor(root) {
    this._root = root || null;
  }

   _traverse(callback) {
    // const self = this;
    function goThrough(node) {
      callback(node);
      node.children.forEach((child) => {
        goThrough(child);
      });
    }
    goThrough(this._root);
  }


  _addNode(value, parentValue, move, player) {
    const newNode = {
      value,
      children: [],
      move,
      player
    };

    if (this._root === null) {
      this._root = newNode;
      return;
    }

    this._traverse((node) => {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }

  _removeNode(value) {
    this._traverse((node) => {
      node.children.forEach((childNode, index) => {
        if (childNode.value === value) {
          node.children.splice(index, 1);
        }
      });
    })
  }

  _search(value) {
    let returnNode = null;
    this._traverse((node) => {
      if (node.value === value) {
        returnNode = node;
      }
    });
    return returnNode;
  }

  _displayLeafs(parentValue) {
    const parentNode = typeof parentValue === 'string' ? this._search(parentValue) : parentValue ;
    let leafsRet = [];
    if (parentValue.children && !parentValue.children.length) {
      return parentValue;
    }

    parentNode.children.forEach((child) => {
      leafsRet.push(this._displayLeafs(child));
    });

    return leafsRet.flat();
  }

}

// class Node {
//   constructor(value, children, move, player) {
//     this.value = value;
//     this.children = children;
//     this.move = move;
//     this.player = player
//   }
// }
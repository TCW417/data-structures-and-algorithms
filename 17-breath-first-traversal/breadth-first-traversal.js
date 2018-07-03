
// Time complexity for all traversals: O(n) where n is the number of nodes

const breadthFirstTraversal = (tree, callback) => {
  const queue = [];
  // const dequeue = Array.prototype.shift;
  // const enqueue = Array.prototype.push;

  queue.push(tree);
  let ptr;

  while (queue.length) {
    ptr = queue.shift();

    callback(ptr.value);

    if (ptr.left) queue.push(ptr.left);
    if (ptr.right) queue.push(ptr.right);
  }
  
  return undefined;
};

// const fizzBuzzTree = (tree, callback) => {
//   if (!tree) return undefined;
//   console.log('fbt: v', tree.value, '%3', tree.value % 3, '%5', tree.value % 5);
//   if ((tree.value % 5 === 0) && (tree.value % 3 === 0)) tree.value = 'fizzbuzz';
//   if (tree.value % 3 === 0) tree.value = 'fizz';
//   if (tree.value % 5 === 0) tree.value = 'buzz';
//   callback(tree.value);
//   fizzBuzzTree(tree.left, callback);
//   fizzBuzzTree(tree.right, callback);

//   return undefined;
// };

export default breadthFirstTraversal;

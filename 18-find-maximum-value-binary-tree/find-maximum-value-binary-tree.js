// Time complexity for all traversals: O(n) where n is the number of nodes
// Space complexity O(d) where d is the max depth of the tree. 
// In a balanced tree this would be O(logn)

const findMaximumValue = (tree) => {
  if (!tree) return null;
  
  const stack = [];
  let max = 0;

  stack.push(tree);
  let ptr;

  while (stack.length) {
    ptr = stack.pop();

    if (ptr.value > max) max = ptr.value;

    if (ptr.left) stack.push(ptr.left);
    if (ptr.right) stack.push(ptr.right);
  }
  
  return max;
};

export default findMaximumValue;

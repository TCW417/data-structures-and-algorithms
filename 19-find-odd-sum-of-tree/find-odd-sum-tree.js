'use strict';

// findOddSum function
export default (tree) => {
  if (!tree) return undefined;
  
  let sum = 0; 

  const preOrder = (t, cb) => {
    const stack = [t];
    while (stack.length) {
      const p = stack.pop();
      cb(p.value);
      if (p.left) stack.push(p.left);
      if (p.right) stack.push(p.right);
    }
    return undefined;
  };
  preOrder(tree, (v) => { sum += v % 2 === 1 ? v : 0; return undefined; });
  
  return sum;
};

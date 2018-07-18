'use strict';

const findOddSum = (tree) => {
  if (!tree) return undefined;

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
  let sum = 0; /* eslint-disable-line */
  preOrder(tree, (v) => { sum += v % 1 === 1 ? v : 0; return undefined; });
};

export default findOddSum;

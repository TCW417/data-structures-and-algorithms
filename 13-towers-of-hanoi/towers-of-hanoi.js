'use strict';

export default (numDisks) => {
  const moves = [];

  const stackA = [];
  const stackB = [];
  const stackC = [];

  let source = stackA;
  let aux = stackB;
  let dest = stackC;

  let sourceLabel = 'A';
  let auxLabel = 'B';
  let destLabel = 'C';

  if (numDisks % 2 === 0) {
    let temp = aux;
    aux = dest;
    dest = temp;
    temp = auxLabel;
    auxLabel = destLabel;
    destLabel = temp;
  }

  for (let i = numDisks; i > 0; i--) {
    stackA.push(i);
  }
  console.log(stackA, stackB, stackC);
  const numMoves = (2 ** numDisks) - 1;

  for (let m = 1; m <= numMoves; m++) {
    if (m % 3 === 1) {
      const d = source.pop();
      dest.push(d);
      moves.push(`Disk ${d} moved from ${sourceLabel} to ${destLabel}`);
    }
    if (m % 3 === 2) {
      const d = source.pop();
      aux.push(d);
      moves.push(`Disk ${d} moved from ${sourceLabel} to ${auxLabel}`);
    }
    if (m % 3 === 0) {
      let d = aux.pop();
      dest.push(d);
      moves.push(`Disk ${d} moved from ${destLabel} to ${auxLabel}`);

      d = source.pop();
      dest.push(d);
      moves.push(`Disk ${d} moved from ${sourceLabel} to ${destLabel}`);

      let temp = source;
      source = aux;
      aux = temp;

      temp = sourceLabel;
      sourceLabel = auxLabel;
      auxLabel = temp;
    }
    console.log(stackA, stackB, stackC);
  }
  return moves;
};

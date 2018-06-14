'use strict';

const useVersion = 1;

const versions = [
  function arrayReverseRev0(arr) {
    if (typeof arr !== 'object' || !arr.length) return undefined;

    let i1 = 0;
    let i2 = arr.length - 1;
    let temp;

    while (i1 < i2) {
      temp = arr[i2];
      arr[i2] = arr[i1];
      arr[i1] = temp;
      i1 += 1;
      i2 -= 1;
    }

    return arr;
  },

  function arrayReverseRev1(arr) {
    if (typeof arr !== 'object' || !arr.length) return undefined;

    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]]; /* eslint-disable-line */

    for (let i1 = 0, i2 = arr.length - 1; i1 < i2; i1 += 1, i2 -= 1) {
      swap(i1, i2, arr);
    }

    return arr;
  },

  function arrayReverseRev2(arry) {
    return (typeof arry !== 'object' || !arry.length) ? undefined : ((arr) => {
      const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]]; /* eslint-disable-line */

      for (let i1 = 0, i2 = arr.length - 1; i1 < i2; i1 += 1, i2 -= 1) {
        swap(i1, i2, arr);
      }

      return arr;
    })(arry);
  },

  function arrayReverseRev3(arry) {
    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]]; /* eslint-disable-line */

    return (typeof arry !== 'object' || !arry.length) ? undefined : ((arr) => {
      const newArr = arr.slice(0);
      arr.map((e, i, arrr) => {
        return (i < arrr.length - 1 - i) ? swap(i, arrr.length - 1 - i, newArr) : e;
      });
      return newArr;
    })(arry);
  },

  function arrayReverseRev4(arr) {
    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]]; /* eslint-disable-line */

    if (typeof arr !== 'object' || !arr.length) return undefined;

    const newArr = arr.slice(0);

    arr.every((_, i) => 
      ((i < newArr.length - 1 - i) ? swap(i, newArr.length - 1 - i, newArr) : false));

    return newArr;
  },
];

const arrayReverse = module.exports = versions[useVersion]; /* eslint-disable-line */

// console.log('[1, 2, 3, 4]', arrayReverse([1, 2, 3, 4])); //good
// console.log('[1, 2, 3]', arrayReverse([1, 2, 3])); //good
// console.log('[1]',arrayReverse([1])); //good
// console.log('["fish", 1, 2, "cats", 3]',arrayReverse(["fish", 1, 2, "cats", 3])); //good
// console.log('15',arrayReverse(15)); //good
// console.log('stringValue',arrayReverse('stringValue')); //good
// console.log('{a: 1, b: 2}', arrayReverse({a: 1, b: 2}));

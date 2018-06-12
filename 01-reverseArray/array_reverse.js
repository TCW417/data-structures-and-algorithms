'use strict';

const useVersion = 4;

const versions = [
  function arrayReverseRev0(arr) {

    if (typeof arr !== 'object' || !arr.length) return undefined;

    let i1 = 0, i2 = arr.length - 1, temp;

    while (i1 < i2){
      temp = arr[i2];
      arr[i2] = arr[i1];
      arr[i1] = temp;
      i1++;
      i2--;
    }

    return arr;
  },

  function arrayReverseRev1(arr) {

    if (typeof arr !== 'object' || !arr.length) return undefined;

    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]];

    for (let i1 = 0, i2 = arr.length-1; i1 < i2; i1++, i2--) {
      swap(i1, i2, arr);
    }

    return arr;
  },

  function arrayReverseRev2(arr) {

    return (typeof arr !== 'object' || !arr.length) ? undefined : ((arr) => {

      const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]];

      for (let i1 = 0, i2 = arr.length-1; i1 < i2; i1++, i2--) {
        swap(i1, i2, arr);
      }

      return arr;
    })(arr);
  },

  function arrayReverseRev3(arr) {

    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]];

    return (typeof arr !== 'object' || !arr.length) ? undefined : ((arr) => {
      let newArr = arr.slice(0);
      arr.map((e, i, arr) => {
        return (i < arr.length-1-i) ? swap(i, arr.length-1-i, newArr) : e;
      });
      return newArr;
    })(arr);
  },

  function arrayReverseRev4(arr) {

    const swap = (a, b, arr) => [arr[b], arr[a]] = [arr[a], arr[b]];

    if (typeof arr !== 'object' || !arr.length) return undefined;

    const newArr = arr.slice(0);

    arr.every((_, i) => {
      (i < newArr.length-1-i ? swap(i, newArr.length-1-i, newArr) : false);
    });

    return newArr;

  }
];

const arrayReverse = versions[useVersion];

console.log('[1, 2, 3, 4]', arrayReverse([1, 2, 3, 4])); //good
console.log('[1, 2, 3]', arrayReverse([1, 2, 3])); //good
console.log('[1]',arrayReverse([1])); //good
console.log('["fish", 1, 2, "cats", 3]',arrayReverse(["fish", 1, 2, "cats", 3])); //good
console.log('15',arrayReverse(15)); //good
console.log('stringValue',arrayReverse('stringValue')); //good
console.log('{a: 1, b: 2}', arrayReverse({a: 1, b: 2}));
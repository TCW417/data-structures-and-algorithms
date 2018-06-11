'use strict';

function arrayReverse(arr) {

  console.log(typeof arr);
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
}

console.log('[1, 2, 3, 4]', arrayReverse([1, 2, 3, 4])); //good
console.log('[1, 2, 3]', arrayReverse([1, 2, 3])); //good
console.log('[1]',arrayReverse([1])); //good
console.log('["fish", 1, 2, "cats", 3]',arrayReverse(["fish", 1, 2, "cats", 3])); //good
console.log('15',arrayReverse(15)); //good
console.log('stringValue',arrayReverse('stringValue')); //good
console.log('{a: 1, b: 2}', arrayReverse({a: 1, b: 2}));
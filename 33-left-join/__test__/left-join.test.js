'use strict';

import leftJoin from '../left-join';

describe('leftJoin tests', () => {
  test('test 1', () => {
    const hm1 = {
      infiniti: 'g37',
      lotus: 'elise',
      kawasaki: 'ninja',
      dodge: 'caliber',
    };
    const hm2 = {
      kawasaki: 0,
      ford: 4,
      lotus: 2,
      infiniti: 2,
    };
    const result = leftJoin(hm1, hm2);
    console.log(result);
    expect(result).toHaveLength(4);
    expect(result[1]).toHaveLength(3);
    expect(result[0][0]).toEqual('infiniti');
    expect(result[2][2]).toEqual(0);
  });
});

import mostCommonWord from '../most-common-word';

describe('WBC 34 Most Common Word tests', () => {
  test('This is This was the This that did', () => {
    const word = mostCommonWord('This is This was the This that did');
    expect(word).toEqual('this');
  });
  test('Now is the time for all good people to come to the aid of their country', () => {
    const word = mostCommonWord('Now is the time for all good people to come to the aid of their country');
    expect(word).toEqual('the');
  });
  test('word1, word2, word3', () => {
    const word = mostCommonWord('word1, word2, word3');
    expect(word).toEqual('word1');
  });
  test('Empty string', () => {
    const word = mostCommonWord('');
    expect(word).toBeNull();
  });
  test('blank string', () => {
    const word = mostCommonWord('  ');
    expect(word).toBeNull();
  });
});

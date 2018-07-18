'use strict';

import repeatedWord from '../repeated-word';

describe('repeatedWord tests', () => {
  test('test 1', () => {
    const str = 'testing, testing, 1, 2, 3';
    expect(repeatedWord(str)).toEqual('testing');
  });

  test('test 2', () => {
    const str = 'testing, this is a test. Does testing work?';
    expect(repeatedWord(str)).toEqual('testing');
  });

  test('test 3', () => {
    const str = 'Once upon a time, there was a brave princess who...';
    expect(repeatedWord(str)).toEqual('a');
  });

  test('test 4', () => {
    const str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    expect(repeatedWord(str)).toEqual('it');
  });

  test('test 5', () => {
    const str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    expect(repeatedWord(str)).toEqual('summer');
  });
});

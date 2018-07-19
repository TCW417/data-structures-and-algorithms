export default (book) => {
  let max = 0;
  const map = new Map();
  const words = book.split(/\W+/);
  let count;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === '') continue; /*eslint-disable-line*/
    if (map.has(words[i].toLowerCase())) {
      count = map.get(words[i].toLowerCase());
      count += 1;
    } else {
      count = 1;
    }
    max = count > max ? count : max;
    map.set(words[i].toLowerCase(), count);
  }
  /*eslint-disable*/
  for (let [ word, value ] of map) {
    if (value === max) return word;
  }
  return null;
}
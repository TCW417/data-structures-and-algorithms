// 31-repeated-word
export default (str) => {
  const words = str.split(/\W+/);
  const map = {};
  for (let i = 0; i < words.length; i++) {
    if (map[words[i].toLowerCase()]) return words[i];
    map[words[i].toLowerCase()] = words[i].toLowerCase();
  }
  return null;
};

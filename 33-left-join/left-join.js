// 333-left-join
export default (hm1, hm2) => {
  let temp = [];
  const rtn = [];
  const keys = Object.keys(hm1);

  for (let i = 0; i < keys.length; i++) {
    temp.push(keys[i]);
    temp.push(hm1[keys[i]]);
    temp.push(hm2.hasOwnProperty(keys[i]) ? hm2[keys[i]] : null); /*eslint-disable-line*/
    rtn.push(temp);
    temp = [];
  }
  return rtn;
};

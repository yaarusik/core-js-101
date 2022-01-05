function get3TopItems(n) {
  const arr = new Array(n).fill([]);
  arr.map((el, indexArr) => {
    const a = new Array(n).fill(0);
    a.map((item, index) => (indexArr === index ? 1 : 0));
    return a;
  });
  return arr;
}

console.log(get3TopItems(2));

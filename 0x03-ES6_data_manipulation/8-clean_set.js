export default function cleanSet(set, ststr) {
  const arr = [];
  for (const str of set.values()) {
    const ststrlen = ststr.length;
    if ((ststr !== '') && (str.startsWith(ststr))) {
      arr.push(str.slice(ststrlen));
    }
  }
  return arr.join('-');
}

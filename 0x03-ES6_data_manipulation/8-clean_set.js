export default function cleanSet(set, ststr) {
  const arr = [];
  for (const str of set.values()) {
    if (str.startsWith(ststr) && (ststr !== '')) {
      arr.push(str.slice(ststr.length));
    }
  }
  return arr.join('-');
}

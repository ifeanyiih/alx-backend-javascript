export default function cleanSet(set, ststr) {
  const arr = [];
  for (const str of set.values()) {
    if (str.startsWith(ststr)) {
      arr.push(str.split(ststr)[1]);
    }
  }
  return arr.join('-');
}

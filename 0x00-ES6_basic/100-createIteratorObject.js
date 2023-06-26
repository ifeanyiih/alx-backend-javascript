export default function createIteratorObject(report) {
  const all = report.allEmployees;
  const items = [];
  for (const dept of Object.keys(all)) {
    items.push(...all[dept]);
  }

  let nextIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      let result;
      if (nextIndex < items.length) {
        result = { value: items[nextIndex], done: false };
        nextIndex += 1;
        return result;
      }
      return { done: true };
    },
  };
}

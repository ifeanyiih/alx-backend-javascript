export default function updateUniqueItems(map) {
  const updateMap = map;
  if (!(updateMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [key, val] of updateMap) {
    if (val === 1) {
      updateMap.set(key, 100);
    }
  }
  return updateMap;
}

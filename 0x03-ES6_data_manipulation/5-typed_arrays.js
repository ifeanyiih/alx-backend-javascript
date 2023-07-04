export default function createInt8TypedArray(len, pos, val) {
  const int8 = new Int8Array(len);
  if (pos >= len) {
    throw new Error('Position outside range');
  }
  int8[pos] = val;
  return new DataView(int8.buffer);
}

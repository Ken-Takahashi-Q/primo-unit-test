export function merge(collection_1: number[], collection_2: number[]): number[] {
  if (collection_1.length === 0) {
    return collection_2;
  }

  if (collection_2.length === 0) {
    return collection_1;
  }

  const merged: number[] = [];
  let i = 0;
  let j = 0;

  while (i < collection_1.length && j < collection_2.length) {
    if (collection_1[i] < collection_2[j]) {
      merged.push(collection_1[i]);
      i++;
    } else {
      merged.push(collection_2[j]);
      j++;
    }
  }

  while (i < collection_1.length) {
    merged.push(collection_1[i]);
    i++;
  }

  while (j < collection_2.length) {
    merged.push(collection_2[j]);
    j++;
  }

  return merged;
}

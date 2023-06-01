import { merge } from './merge';

describe('merge', () => {
  it('should merge 2 sorted arrays', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge arrays with different lengths', () => {
    const collection1 = [1, 3, 5];
    const collection2 = [2, 4, 6, 7];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should merge arrays with duplicate values', () => {
    const collection1 = [1, 3, 3, 5];
    const collection2 = [2, 3, 4, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 3, 3, 4, 4, 5, 6]);
  });

  it('should return collection_2 if collection_1 is empty', () => {
    const collection1: number[] = [];
    const collection2 = [2, 4, 6];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual(collection2);
  });

  it('should return collection_1 if collection_2 is empty', () => {
    const collection1 = [1, 3, 5];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual(collection1);
  });

  it('should return empty when both are empty', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });
});

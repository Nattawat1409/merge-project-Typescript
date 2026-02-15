import { merge } from './merge';

describe('merge function', () => {
  //1st case - should merge three sorted arrays correctly
  test('should merge three sorted arrays correctly', () => {
    const result = merge([1, 3, 5], [2, 4, 6], [9, 7, 0]);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  //2nd case - should handle arrays of different lengths
  test('handles different length arrays', () => {
    const result = merge([1, 5], [2, 3, 4, 6, 7], [10, 8]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 10]);
  });

  //3rd case - should handle duplicate values
  test('handles duplicate values', () => {
    const result = merge([1, 2, 2], [2, 3, 3], [5, 3, 1]);
    expect(result).toEqual([1, 1, 2, 2, 2, 3, 3, 3, 5]);
  });

  //4th case - should handle negative numbers
  test('works with empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([], [1, 2], [3, 2])).toEqual([1, 2, 2, 3]);
    expect(merge([1, 2], [], [3, 2])).toEqual([1, 2, 2, 3]);
  });

  //5th case - should handle single element arrays
  test('works with single elements', () => {
    const result = merge([5], [3], [7]);
    expect(result).toEqual([3, 5, 7]);
  });

  //6th case - should handle arrays with negative numbers
  test('handles negative numbers', () => {
    const result = merge([-5, -3, 0], [-4, -1, 1], [4, 0, -6]);
    expect(result).toEqual([-6, -5, -4, -3, -1, 0, 0, 1, 4]);
  });

  //7th case - should handle arrays with all same values
  test('handles all same values', () => {
    const result = merge([5, 5], [5, 5], [5, 5]);
    expect(result).toEqual([5, 5, 5, 5, 5, 5]);
  });

  //8th case - should handle arrays with some empty and some non-empty
  test('result is sorted in ascending order', () => {
    const result = merge([10, 20, 30], [5, 15, 25], [35, 12, 8]);
    
    // check if each element is greater than or equal to previous
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
  //9th case - should contain all elements from input arrays
  test('result contains all elements', () => {
    const result = merge([1, 2], [3, 4], [6, 5]);
    
    expect(result.length).toBe(6);
    expect(result).toContain(1);
    expect(result).toContain(2);
    expect(result).toContain(3);
    expect(result).toContain(4);
    expect(result).toContain(5);
    expect(result).toContain(6);
  });

  //10th case - should handle large arrays efficiently
  test('handles large arrays', () => {
    // create arrays with many elements
    const arr1 = [];
    const arr2 = [];
    const arr3 = [];
    
    for (let i = 0; i < 100; i++) {
      arr1.push(i * 3);
      arr2.push(i * 3 + 1);
      arr3.push(300 - i * 3);
    }
    
    const result = merge(arr1, arr2, arr3);
    
    expect(result.length).toBe(300);
    
    // verify if it's sorted
    for (let i = 1; i < result.length; i++) {
      expect(result[i]).toBeGreaterThanOrEqual(result[i - 1]);
    }
  });
});
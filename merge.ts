export function merge(
// Create each array and prepare for merge three sorted arrays into a single sorted array //
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  let result = [];
  
  let i = 0;
  let j = 0;
  let k = collection_3.length - 1;
  
  while (i < collection_1.length || j < collection_2.length || k >= 0) {
    
    // assign values to each collection, if index is out of bounds assign Infinity //
    let value1 = Infinity;
    let value2 = Infinity;
    let value3 = Infinity;
    
    // determine scope of lengths of each collection //
    if (i < collection_1.length) {
      value1 = collection_1[i];
    }
    
    if (j < collection_2.length) {
      value2 = collection_2[j];
    }
    
    if (k >= 0) {
      value3 = collection_3[k];
    }
    
    // compare values and push the smallest one to result, then move the corresponding index //
    if (value1 <= value2 && value1 <= value3) {
      result.push(value1);
      i++;
    } else if (value2 <= value1 && value2 <= value3) {
      result.push(value2);
      j++;
    } else {
      result.push(value3);
      k--;
    }
  }
  
  return result;
}
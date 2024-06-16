// Given two sorted array of integers.
//Create a func that return an array which is sorted+ merge of both arrays

// function mergeSortedArray(arr1, arr2) {
//   if (arr1.length === 0) {
//     return arr2;
//   }
//   if (arr2.length === 0) {
//     return arr1;
//   }
//   let arr1Element = arr1[0];
//   let arr2Element = arr2[0];
//   let i = 0;
//   let j = 0;
//   let result = [];
//   while (arr1Element || arr2Element) {
//     if (arr2Element === undefined || arr1Element < arr2Element) {
//       result.push(arr1Element);
//       arr1Element = arr1[++i];
//     } else {
//       result.push(arr2Element);
//       arr2Element = arr2[++j];
//     }
//   }
//   return result;
// }

function mergeSortedArray(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);
}

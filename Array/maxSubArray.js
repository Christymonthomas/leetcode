// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// SOLUTION -1
// ***********

// function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let currentSum = maxSum;
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
//   return maxSum;
// }

// SOLUTION - 2
// ***********

function maxSubArray(nums) {
  // Base Case: if the array has only one element, return that element.
  if (nums.length === 1) {
    return nums[0];
  }

  // Find the middle index of the array.

  const mid = Math.floor(nums.length / 2);

  // Recursively find the maximum subarray in the left and right halves.
  const leftmax = maxSubArray(nums.slice(0, mid));
  const rightMax = maxSubArray(nums.slice(mid));

  // Find the maximum subarray sum that crosses the middle index.
  let leftCrossMax = -Infinity;
  let rightCrossMax = -Infinity;
  let sum = 0;
  //Find the maximum sum starting from the middle index and going left
  for (let i = mid - 1; i >= 0; i--) {
    sum += nums[i];
    leftCrossMax = Math.max(leftCrossMax, sum);
  }
  sum = 0;
  //Find the maximum sum starting from the middle index and going right
  for (let i = mid; i < nums.length; i++) {
    sum += nums[i];
    rightCrossMax = Math.max(rightCrossMax, sum);
  }

  // return the maximum of 3 sums.

  return Math.max(leftmax, rightMax, leftCrossMax + rightCrossMax);
}

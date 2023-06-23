//Questions 3
function findLHS(nums) {
  const countMap = new Map();
  
  // Count the frequency of each number in the array
  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  
  let longestSubsequence = 0;
  
  // Iterate through the unique numbers in the array
  for (let num of countMap.keys()) {
    // Check if there exists a number that differs by 1
    if (countMap.has(num + 1)) {
      const currentLength = countMap.get(num) + countMap.get(num + 1);
      longestSubsequence = Math.max(longestSubsequence, currentLength);
    }
  }
  
  return longestSubsequence;
}


const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const longestSubsequenceLength = findLHS(nums);
console.log(longestSubsequenceLength);  

  
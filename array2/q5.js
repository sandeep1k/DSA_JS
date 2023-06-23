//Questions 5
function maximumProduct(nums) {
    nums.sort((a, b) => b - a); // Sort the array in descending order
  
    return Math.max(
      nums[0] * nums[1] * nums[2],
      nums[0] * nums[nums.length - 1] * nums[nums.length - 2]
    );
  }
  
  // Test the function
  const nums = [1, 2, 3];
  const result = maximumProduct(nums);
  console.log(result); // Output: 6
  

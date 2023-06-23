//Questions 8
function minScore(nums, k) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  
  const n = nums.length;
  const smallest = nums[0] + k; // Add k to the smallest element
  const largest = nums[n - 1] - k; // Subtract k from the largest element
  
  let minScore = nums[n - 1] - nums[0]; // Initialize the minimum score
  
  for (let i = 0; i < n - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    
    const low = Math.min(smallest, next - k); // Calculate the lowest possible value
    const high = Math.max(largest, current + k); // Calculate the highest possible value
    
    minScore = Math.min(minScore, high - low); // Update the minimum score
  }
  
  return minScore;
}


const nums = [1];
const k = 0;
const result = minScore(nums, k);
console.log(result); // Output: 0

  
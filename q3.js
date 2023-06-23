//Questions 3

function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return left;
  }
  
  // Test case
  const nums = [1, 3, 5, 6];
  const target = 5;
  console.log(searchInsert(nums, target)); 
  
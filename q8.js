//Questions 8
function findErrorNums(nums) {
    const n = nums.length;
    const count = new Array(n + 1).fill(0);
    let duplicate = -1;
    
    for (let i = 0; i < n; i++) {
      count[nums[i]]++;
      if (count[nums[i]] === 2) {
        duplicate = nums[i];
        break;
      }
    }
    
    let missing = -1;
    for (let i = 1; i <= n; i++) {
      if (count[i] === 0) {
        missing = i;
        break;
      }
    }
    
    return [duplicate, missing];
  }
  

  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result);
  
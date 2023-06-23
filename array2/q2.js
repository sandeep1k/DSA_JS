
//Questions 2
function maxTypesOfCandies(candyType) {
  const maxEat = candyType.length / 2;
  const uniqueCandies = new Set(candyType);
  
  return Math.min(uniqueCandies.size, maxEat);
}


const candyType = [1, 1, 2, 2, 3, 3];
const result = maxTypesOfCandies(candyType);
console.log(result);

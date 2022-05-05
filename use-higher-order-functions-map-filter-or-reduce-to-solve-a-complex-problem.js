const squareList = arr => {
  // Only change code below this line
  
  return arr
  .filter(n=>n > 0 && n % parseInt(n)===0)
  .map(n=> Math.pow(n,2))
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
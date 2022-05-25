function smallestCommons(arr) {
  let max = Math.max(arr[0], arr[1]),
      min = Math.min(arr[0], arr[1]),
      i = 1;
  while (true) {
    let count = 0;
    for (let j = min; j < max; j++) {
      if (max * i % j !== 0) {
        break;
      }
      count++;
    }
    if (count === (max - min)) {
      
      return max * i;
    }
    i++;
  }
}

console.log(smallestCommons([6,9]))
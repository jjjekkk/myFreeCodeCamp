function sumAll(arr) {
  let minNum = Math.min(arr[0], arr[1]);
  let maxNum = Math.max(arr[0], arr[1]);
  let array = [];
  while (minNum<=maxNum){
    array.push(minNum++)
  }
  return array.reduce((num,sum) => num+sum ,0);
}

console.log(sumAll([1, 4]))
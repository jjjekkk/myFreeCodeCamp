function chunkArrayInGroups(arr, size) {
  const parentalArr = arr;
  const sizeArr = size;
  const newArr = [];
  for(let i = 0; i<parentalArr.length; i+=sizeArr){
    newArr.push(parentalArr.slice(i, i + sizeArr))
  }
  
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
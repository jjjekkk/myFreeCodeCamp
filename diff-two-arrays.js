function diffArray(arr1, arr2) {
  let unionArr = arr1.concat(arr2);
    const newArr = [];
  for (let i = 0; i < unionArr.length; i++) {
if ((arr1.includes(unionArr[i])===false && arr2.includes(unionArr[i])===true)||(arr1.includes(unionArr[i])===true && arr2.includes(unionArr[i])===false)){
  newArr.push(unionArr[i])
}
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
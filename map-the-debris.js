function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  
for( let i = 0; i<arr.length; i++) {

  let a = arr[i].avgAlt + earthRadius;

  let orbitPeriod = Math.round(
    2 * Math.PI * Math.sqrt((Math.pow(a,3)/GM))
    );

  delete arr[i].avgAlt;
  
  arr[i]['orbitalPeriod'] = orbitPeriod;
}
  return  arr
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
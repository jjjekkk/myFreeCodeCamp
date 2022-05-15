function telephoneCheck(str) {
  let firstTest = /[/(/)0-9]/g; 
 let firstSplit = str.split(' ');
 let arr = str.match(firstTest).join('');

let re1 = /^(1)\(\d{3}\)\d{7}$/; //1(555)
let re2 = /^\(\d{3}\)\d{7}$/; //(555)
let re3 = /^\d{10}$/; //555
let re4 = /^(1)\d{10}$/; //1555

if(firstTest.test(str[0])===false ){ 
  //str[0] only number or '('
  return false
  } else if(firstSplit[0].length===2) {
    // test for country code
  return false
} else if(re1.test(arr)===true) {
  return true
} else if(re2.test(arr)===true) {
  return true
}else if(re3.test(arr)===true) {
  return true
} else if(re4.test(arr)===true) {
  return true
} else  {
  return false
  }
}
console.log(telephoneCheck("1(555)55-55555"))

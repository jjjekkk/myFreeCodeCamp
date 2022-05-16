function telephoneCheck(str) {
 const firstTest = /[/(/)0-9]/g; 
 const firstSplit = str.split(' ');
 const arr = str.match(firstTest).join('');

const regExp =
/^(1)\(\d{3}\)\d{7}$|^\(\d{3}\)\d{7}$|^\d{10}$|^(1)\d{10}$/;

if(firstTest.test(str[0])===false ){ 
  //str[0] only number or '('
  return false
} else if(firstSplit[0].length===2) {
    // test for country code
  return false
} else if(regExp.test(arr)===true) {
  return true
} else {
  return false
  }
}
console.log(telephoneCheck("1(555)55-55555"))

function convertToRoman(num) {
 let romanNum = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  };
  let str = '';
  for (let i of Object.keys(romanNum)){
    let x = Math.floor(num/romanNum[i]);
    num -= x*romanNum[i];
    str += i.repeat(x)
  }
  return str
}

console.log(convertToRoman(1111))
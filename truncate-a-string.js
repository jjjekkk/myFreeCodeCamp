function truncateString(str, num) {
  let sliceStr = str;
  if (num < sliceStr.length) { 
    return (sliceStr.slice(str, num) + '...')
    };
return sliceStr;
   
   }

truncateString("A-tisket a-tasket A green and yellow basket", 8);
function getIndexToIns(arr, num) {
   let arrUp = arr.concat(num);
   function sortArrUp(a,b){
     if (a>b) {
       return 1;
     } else if (a<b) {
       return -1;
     } else {
       return 0;
     }
   }
   return arrUp.sort(sortArrUp).indexOf(num);
   
}

getIndexToIns([40, 60], 50);
var arr=[10,11,20,50,100,250,300,1000,5,6]
arr.sort((n1,n2)=>n1-n2)  //ascending order
console.log(arr);
//for descending order
arr.sort((n1,n2)=>n2-n1)
console.log(arr);
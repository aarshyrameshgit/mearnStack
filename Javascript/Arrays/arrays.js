arr=[1,2,3,6,7,8]
//For total
var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total);
//for minimum
console.log(arr.reduce((n1,n2)=>n1<n2?n1:n2));
//For maximum
console.log(arr.reduce((n1,n2)=>n1>n2?n1:n2));
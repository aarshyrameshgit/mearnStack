function smartSub(n1,n2){
// if (n1>n2){
//     return n1-n2
// }
// else{
//     return n2-n1
// }

return n1>n2?n1-n2:n2-n1  //replaced by ternary operator
}
console.log(smartSub(5,10));
//using arrow function
var smartSub=(n1,n2)=>n1>n2?n1-n2:n2-n1
console.log(smartSub(5,10));

// var phoneNum="956545"
// console.log(phoneNum.length);

// function validatePhoneNumber(phno){
//     return phno.length==10?true:false
// }
// console.log(validatePhoneNumber("9744562868"));


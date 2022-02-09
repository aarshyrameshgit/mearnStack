//function starts with A

// function isStartWithA(name){
//     return name[0]=='a'||name[0]=='A'?true:false
// }
// console.log(isStartWithA);

//validate gmail
function validateGmail(email){
    // if(email.endsWith("@gmail.com")){
    //     return true
    // }
    // else{
    //     return false
    // }
    //ternary converting
    return email.endsWith("@gmail.com")?true:false
}
console.log(validateGmail("abcd@gmail.com"))
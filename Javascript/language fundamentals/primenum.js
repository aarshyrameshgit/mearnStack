//break
// for(let i=0; i<=5; i++){  
// if(i==3){
//     break;
// }
// console.log(i);
// }
// console.log("nxt stmnt");

//continue
// for(let i=0; i<=5; i++){  
//     if(i==3){
//         continue;
//     }
//     console.log(i);
//     }
//     console.log("nxt stmnt");

//primenumber with flag
var num=9, flag=0
for(let i=2; i<num; i++){ 
if(num%i==0){
    flag=1
    break;
}
}
console.log(flag==0?"prime":"not prime");
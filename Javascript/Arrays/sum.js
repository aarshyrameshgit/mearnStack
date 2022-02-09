var arr=[4,5,6]
 var sum=0
 for(let num of arr){
 sum+=num
 }
//  console.log(sum);
 for(let num of arr){
     console.log(sum-num);
 }

 // to push output to an array
 var arr=[4,5,6]
 var op=[],sum=0
 for(let num of arr){
     sum+=num
 }
 for(let num of arr){
     op.push(sum-num)
 }
 console.log(op);
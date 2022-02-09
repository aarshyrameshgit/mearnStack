function add(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(add(10,20,30,40));
//findmax
function findMax(...args){
    return args.reduce((n1,n2)=>n1>n1?n1:n2)
}
console.log(findMax(10,20,30,50,100,200,500));

//to push an element to an array

// var arr=[10,20]
// arr.push=40
// console.log(arr);
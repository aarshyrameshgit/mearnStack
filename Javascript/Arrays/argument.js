function add(...args){
   return args.reduce((n1,n2)=>n1+n2)
}
function findMax(...args){
    return args
}
console.log(add(10,20,30,40));
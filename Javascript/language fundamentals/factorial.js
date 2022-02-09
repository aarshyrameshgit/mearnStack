var num=5, i=1
var fact=1
while(i<=num){
    fact*=i
    i++
}
console.log(fact);


var num=2, low=8, upp=36
var i=1
while(i<=upp){
    let res=i**num
    if(res>=low && res<=upp){
        console.log(i);
    }
    i++
}
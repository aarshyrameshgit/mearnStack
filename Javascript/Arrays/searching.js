var arr=[10,11,1,2,3,14]
//        0  1 2 3 4  5
//to check whether the element 2 is their or not
var element=2
var flag=0
for(let num of arr){ //using of
    if(num==element){
    flag=3 // position of the element
    break
    }
}

console.log(flag==0?"not found":"element found");

//to check position of the element
var element=2
var flag=0
for(let index in arr){ // using in 
    if(element==arr[index]){
        console.log("position",index);
        flag=1
        break
    }
}
console.log(flag==0?"not found":"element found");

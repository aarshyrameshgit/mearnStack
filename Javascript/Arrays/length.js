var arr=[10,11,12,9,87,6,5]
// using of
for (let num of arr){
    console.log(num);
}

// using in
for(let index in arr){
    console.log(arr[index]);
}

console.log("no of objects",arr.length); // arr.length is a property
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

var brands=["redmi","realme","samsumg","iphone","oppo"]
//using of
for(let brand of brands){
    console.log(brand);
}
// using in
for(let index in brands){
    console.log(brands[index]);
}
//using length
for(let i=0;i<brands.length;i++){
    console.log(brands[i]);
}
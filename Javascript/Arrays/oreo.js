var products=[
    [100,"oreo",40,50],
    [101,"goodday",30,50],
    [102,"hidendseek",50,0],
    [103,"moms's",20,10],
    [104,"treat",70,5],
    [105,"oreo",50,80],
    [106,"oreo",70,50],


]


// 1) print costly product - reduce
var costlyProduct=products.reduceRight((p1,p2)=>p1[2]>p2[2]?p1:p2)
console.log(costlyProduct);
//)2) print out of stock product - filter
var outOfStockProducts=products.filter(p=>p[3]==0)
console.log(outOfStockProducts);
//3) print oreo details - find
var oreoDetail=products.find(p=>p[1]=="oreo")
console.log(oreoDetail);
//4) Sort products based on available stock order by desc - sort
var availableStock=products.sort((p1,p2)=>p2[3]-p1[3])
console.log(availableStock);
//5) print product details having maximum available stock - reduce
var maxStock=products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)
console.log(maxStock);

//6 a) using some method,, products available at 10rs
var isAvailable=products.some(p=>p[2]==10)
console.log(isAvailable);
//6 b) is their any product with available stock greater than 100
var isAvailable=products.some(p=>p[3]>100)
console.log(isAvailable);
//6 c) is their any products available in range 10-20
var isAvailable=products.some(p=>p[2]>=10 && p[2]<=20)
console.log(isAvailable);
//7) print all products available in range 10-20
var isAvailable=products.filter(p=>p[2]>=10 && p[2]<=20)
console.log(isAvailable);

//using forEach method
products.forEach(p=>console.log(p[1]))
products.forEach(p=>console.log(p[2]))
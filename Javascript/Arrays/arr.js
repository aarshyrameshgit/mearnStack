var arr=[
    [10,50],
    [20,60],
    [1,2],
    [5,8],
    [30,40]
]

//print all numbers>10
arr.flat().filter(num=>num>10).forEach(n=>console.log(n))
// // print squares of all numbers
// arr.map(num=>num**2).forEach(num=>console.log(num))

// // print total sum 
// arr.flat().reduce((n1,n2)=>n1+n2).forEach(n=>console.log(n))

// // print highest element
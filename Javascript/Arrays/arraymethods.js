arr=[10,11,12,13,14,15]
//print squares of all numbers
//find cubes of all numbers
//print even numbers
//a)
// function square(num){
//     return num**2
// } 
// var squares=arr.map(square)
// console.log (squares);
//(OR)
var squares=arr.map(num=>num**2)
console.log(squares);
//b)
//  function cube (num){
//      return num**3
//  }
//  var cubes=arr.map(cube)
//  console.log(cubes);
//(OR)
var cubes=arr.map(num=>num**3)
console.log(cubes);
//c) using filter
var evens=arr.filter(num=>num%2==0)
console.log(evens);
//d) print all numbers >12
console.log(arr.filter(num=>num>12));
//e) create an array if num<5 num-1 else num+1
var op=arr.map(num=>num<5?num-1:num+1)
console.log(op);
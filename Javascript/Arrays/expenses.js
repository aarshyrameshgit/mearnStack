// var expenses=[20000, 25000, 30000, 35000, 40000]
           //   0      1      2      3      4
           //  jan    feb    mar    apr    may
// console.log(expenses[2]);
// console.log(expenses[4]);
// console.log(expenses.length);

// //to print one by one
// for(let expense of expenses){
//     console.log(expense);
// }
//to find total expenses
// var total=0
// for(let amount of expenses){
//     total+=amount
// }
// console.log("total expenses till now",total);

//to find maximum expenses
// var maxExp=0
// for(let amount of expenses){
//     //amount=20000
//     if(maxExp<amount){ //0<20k,20k<25k,25k<30k....
//     maxExp=amount

//     }
// }
// console.log(maxExp);

//to find minimum expense
var expenses=[20000, 25000, 5000, 30000, 35000, 40000]

var minExp=expenses[0] //20k
for(let amount of expenses){
    //amount= 20k, 25k, 5k
    if(amount<minExp){ //20k<20k, 20k<25k, 5k<20k, 5k<30k....
        minExp=amount
    }
}
console.log(minExp);
// var mobiles=["redmi,samsumg,iphone,nokia,huwaei"]
// for(let item of mobiles){
//     console.log(item);
// }
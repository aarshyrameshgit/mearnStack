//without prototype and applying method over ride method

// class parent{
//     bike(){
//         console.log("passionpro");  
//     }
// }

// class child extends parent{
// bike(){
//     console.log("pulsar");
// }
// }
// var ch=new child()
// console.log(ch.bike());


//with prototype

var baleno={
    manufacture:"nexa",
    price:10,
    varients:["manuel"],
    color:["red","blue"],
    break:"abs"
}
var glanza={
    manufacture:"toyota",
    price:12
}

glanza.__proto__=baleno // glanza inherited baleno by proto type bcoz both are 2 objects
console.log(glanza.manufacture);
console.log(glanza.varients);
console.log(glanza.color);
console.log(glanza.break);
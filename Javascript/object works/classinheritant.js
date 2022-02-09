//method over riding or using without prototype
class parent{
    bike(){
        console.log("passionpro");  
    }
}

class child extends parent{
bike(){
    console.log("pulsar"); // creating new bike for child without inheritant from parent, when called child bike will called
}
}
var ch=new child()
console.log(ch.bike());



function add(){
    console.log("1");
}
function add(n1,n2){
    console.log("2");
}
function add(n1,n2,n3){
    console.log("3");
}
add(10,20)

// OR
class Maths{
    add(...args){
        console.log(args);
    }
}

var obj=new Maths()
obj.add(10,20)
obj.add(10,20,30)
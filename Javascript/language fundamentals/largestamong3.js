// console.log(num/3:num/5:num/15);
// 1) largest among three
var num1=10,num2=0,num3=30;
// comparing num1&num2 
if(num1>num2 & num1>num3){ //(10>20) & (10>30)  f & f
    console.log(`${num1} is maximum`);
}
else if(num2>num1 & num3>num2){//(20>10) & (20>30)  t & f
    console.log(`${num2} maximum`);
}
else if(num3>num1 & num3>num2){//(30>10) & (30>20)  t & t

    console.log(`${num3} maximum`);
}
for(let row=1; row<=4;row++){
    let str=""
    for(let col=1;col<=7;col++){
if(row==4|| col+row==5||col-row==3){
    str+="*"
}
else{
    str+=" "
}
    }
  
    console.log(str);
}

var pattern="ABABBCC"
// var chars=Array.from(pattern)
var wc={}
for(let char of pattern){
    //chara=A
    if (char in wc){
        console.log(`${char}is first recursive character`);
        break
    }
    else{
        wc[char]=1
    }
}

var string="hello"
var vowels=["a","e","i","o","u"]
for(let chara of string){
    if (vowels.includes(chara)){
        console.log(chara);
    }
    
}
//OR
// Array.from(string).filter((char)=>vowels.includes((char)).forEach((char)=>console.log(char))
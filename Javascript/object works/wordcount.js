var text="hello hai hello hai"
//wordcount: hello:2 hai:2
//step 1 - split strings in to words
// var words=text.split(" ")
var wordCount={}
// for(let word of words){
//     if(word in wordCount){
//         wordCount[word]+=1
//     }

//     else{
//         wordCount[word]=1
//     }
// }
// console.log(wordCount);
//OR
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1:wordCount[word]=1)
console.log(wordCount);

//var pattern="ABBBC"
//find first recursive character
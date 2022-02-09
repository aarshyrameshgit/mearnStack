var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:32},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
    

]
//print dristrict name & temperature 
//{thrissur:32,ekm:32,ktm:30}
var weatherOut={}
for(let record of data){
    //record={districtname:"thrissur",weather:29},
    let districtName=record["districtname"]
    let curTemp=record["weather"]
    if(districtName in weatherOut){
    let oldTemp=weatherOut[districtName]//32
    if(curTemp>oldTemp){
        weatherOut[districtName]=curTemp
    }
    }
    else{
        weatherOut[districtName]=curTemp
    }
}
console.log(weatherOut);

// highest temp from data
// var out=[
//         ["thrissur",32],
//         ["ekm",32],
//         ["ktm",30],
//         ["idk",35]
// ]
// out.sort((r1,r2)=>r2[1]-r1[1])
// console.log(out);                                   OR

console.log(Object.entries(weatherOut).sort((r1,r2)=>r2[1]-r1[1]));
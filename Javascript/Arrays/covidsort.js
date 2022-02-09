var covid_data=[   //+    death  rec
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alappuzha",25000,150,24000,9,5],
    [5,"ernakulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"idukki",1000,50,9500,9,6]   
]
//print all +ve case count
// console.log(covid_data.map(data=>data[2]));
//to print 2 datas at a time
// console.log(covid_data.map(data=>[data[1],data[2]]));

// q1 higest test + ve case district
// var redCategory=covid_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(redCategory);

  
// // q2 district with higest 1 dose vaccination rate
// var greenCity=covid_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)
// var greenDistricts=covid_data.filter(d=>d[5]==greenCity[5])
// console.log(greenDistricts);
   
// q3 district with lowest death cases
// for(let num of covid_data){
//     console.log(num[3]);
// }

// // q4 sort district with +ve cases
// for(let num of covid_data){
//     console.log(num[2]);
// }

// // q5 sort the districts based on 1st dose
// for(let num of covid_data){
//     console.log(num[5]);
// }

// q6 is there any states with +ve cases > 60000
// for(let num of covid_data){
//     if(num[5]>60000){
//         console.log(num);
//     }
// }

// q7 print trissur details
// for (let data of covid_data){
//     if(data[1]=='thrissur'){
//         console.log(data);
//     }
// }


// q8 total number of +ve cases


// q9 total number of cured cases

// q10 cured numbers of idukki
// for(let data of covid_data){
//     if(data[1]=="idukki"){
//         console.log(data[4]);
//     }
// }
//(OR)
// console.log(covid_data.find(data=>data[1]=="idukki")[4]);
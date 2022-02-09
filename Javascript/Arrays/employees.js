
var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
// Q1) print all employees name only
// for(let employee of employees){
//     //employee= [1000,"ram","developer","kochi",25000,1]
//     console.log(employee[1]);
// }
//(OR) Using mapping
// console.log(employees.map(emp=>emp[1]));
// // //Q2) print number of employee in this company
// console.log(employees.length);

// // //Q3) print developer details only
// for(let emp of employees){
//     if([emp[2]]=="developer"){
//         console.log(emp); 
//     } 
// }
//using filter
// var developers=employees.filter(emp=>emp[2]=="developer")
// console.log(developers);

// // Q4) print employee details whose salary > 30k
// for(let employee of employees){
//     if(employee[4]>35000){
//         console.log(employee);
//     }
// }
// // Q5) print details of arjun
// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// // }

// // //Q6) sort employee details based salary by descending order
// employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employees);

//Q7) sort employees based on exp order
// employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
//     console.log(employees);

//Q8) print details of abi
// var empDetails=employees.find(emp=>emp[1]=="abi")
// console.log(empDetails);

//Q9) total salary
// var empSalary=employees.map(emp=>emp[4])
// var totalSalary=empSalary.reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);
// //OR
// var empSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalSalary);

//Q10) minimum salary
var minSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2)
console.log(minSalary);

//Q11) highest salary
var maxSalary=employees.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(maxSalary);
//Q12) highest experience
var highExp=employees.map(emp=>emp[5]).reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
console.log(highExp);

//Q13) name of employee who have low experience
var fresherEmp=employees.reduce((e1,e2)=>e1[5]<e2[5]?e1:e2)
console.log(fresherEmp[1]);

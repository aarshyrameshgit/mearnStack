var student={
    rollno:1000,
    st_name:"bob",
    course:"mearn",
    total:"450"
}
//print student name
console.log(student["st_name"]); 
//OR
console.log(student.st_name);
//print course
console.log(student.course);
console.log("gender" in student);
// to add gender
student["gender"]="male"
console.log(student);
//to add isVaccinated to this list
student.isVaccinated=true
console.log(student);
// to add vaccine is covishield
student.vaccine="covishield"
console.log(student);
//to change or update covishield to covaxin
student.vaccine="covaxin"
console.log(student);

student.total=500
console.log(student);
student.total+=50
console.log(student);

for(let key in student)
console.log(key);
console.log(student["key"]);
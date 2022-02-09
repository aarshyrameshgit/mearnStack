class Employee{
    setEmployee(name,age,gender){
        this.name=name
        this.age=age
        this.gender=gender
    }
    printEmployee(){
        console.log(this.name,this.age,this.gender);
    }
}
// creating object
var emp=new Employee()
emp.setEmployee("ram",25,"male")
emp.printEmployee()  //to print first employee details

// for print second employee details
var emp1=new Employee()
emp.setEmployee("ravi",30,"male")
emp.printEmployee()
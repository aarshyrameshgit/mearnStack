//creating class
class Student{
    constructor(rol,st_name,course,total){
        this.rol=rol
        this.st_name=st_name
        this.course=course
        this.total=total
    }
    printStudent(){
        console.log(this.rol,this.st_name,this.course,this.total);
    }
}

//creating object/instance
var st=new Student(1,"ram","mearn",50000)
// st.setStudent(1,"ram","mearn",50000)
st.printStudent()

//for 2nd student
var st1=new Student(2,"bob","python",70000)
// st.setStudent(2,"bob","python",70000)
st.printStudent() 
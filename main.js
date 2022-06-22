
class Student {
    constructor(firstName, Classroom, Id) {
        this.firstName = firstName;
        this.Classroom = Classroom;
        this.Id = Id;

    }

    printfunc() {
        return `fname:${this.firstName} lname:${this.Classroom} id:${this.Id}`;
    }
}


const student1 = new Student('shlomo', 'a', 22222);
const student2 = new Student('yakov', 'a', 4444);
console.log(student1, student2);
console.log(student1.printfunc());


class ACollegeStudent extends Student {


}
const collegestudent = new ACollegeStudent('avi', 'a', 3333)
console.log(collegestudent);




class HighschoolStudent extends Student {

    constructor(firstName, Classroom, Id, lastname, age) {
        super(firstName, Classroom, Id);
        this.lastname = lastname;
        this.age = age;

    }

}
const highschoolstudent = new HighschoolStudent('ssss', 'hhhh', 5555, 'fghg', 55);
console.log(highschoolstudent);



class DivisionStudent extends Student {
    constructor(firstName, Classroom, Id) {
        super(firstName, Classroom, Id);
    }
    printfuncd() {
        return   super.printfunc() +  `${'hello'}` ;
         
    }
}

const divisionstudent = new DivisionStudent('bbb0', 'ssdd', 4545);
console.log(divisionstudent.printfuncd());


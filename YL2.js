class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}

class Student extends Person {
    constructor(firstname, lastname, age) {
        super(firstname);
        super(lastname);
        super(age);
    }
}

const person = new Person ('', '', 0)



console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
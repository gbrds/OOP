class Student {
    #name;
    #id;

    constructor(name, id) {
        this.#name = name;
        this.#id = id;
        this._status = 'active';
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }
    set name(newname) {
        this.#name = newname;
    }

    get status() {
        return this._status;
    }
    set status(newstatus) {
        if (['active', 'expelled', 'finished', 'inactive'].includes(newstatus)){
            this._status = newstatus;
        } else {
            this.status = 'active';
        }
    }
}

const student = new Student('john', 1)
console.log(student.id)
console.log(student.name)
console.log(student.status)
student.name = 'jack';
console.log(student.name)
student.status = 'finished'
console.log(student.status)
student.status = 'home'
console.log(student.status)
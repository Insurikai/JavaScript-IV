// CODE here for your Lambda Classes

class Person{
    constructor(args){
        this.name = args.name;
        this.age = args.age;
        this.location = args.location;
    }
}
class Student extends Person{
    constructor(args){
        super(args);
    }
}
class Instructor extends Person{
    constructor(args){
        super(args);
    }
}
class ProjectManager extends Instructor{
    constructor(args){
        super(args);
    }
}
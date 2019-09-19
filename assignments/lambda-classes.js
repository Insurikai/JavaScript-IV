// CODE here for your Lambda Classes

class Person{
    constructor(args){
        this.name = args.name;
        this.age = args.age;
        this.location = args.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}
class Student extends Person{
    constructor(args){
        super(args);
        this.previousBackground = args.previousBackground;
        this.className = args.className;
        this.favSubjects = args.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(element => console.log(element));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
    
}
class Instructor extends Person{
    constructor(args){
        super(args);
        this.specialty = args.specialty;
        this.favLanguage = args.favLanguage;
        this.catchPhrase = args.catchPhrase;
    }
    demo(subject){ return `Today we are learning about ${subject}`; }
    grade(student, subject){ return `${student.name} receives a perfect score on ${subject}`; }
}
class ProjectManager extends Instructor{
    constructor(args){
        super(args);
        this.gradClassName = args.gradClassName;
        this.favInstructor = args.favInstructor;
    }
    standUp(){}
    debugsCode(){}
}
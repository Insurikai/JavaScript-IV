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
    standUp(channel){ return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;}
    debugsCode(student, subject){ return `${this.name} debugs ${student.name}'s code on ${subject}`;}
}


const stewart = new Student({
    name: 'Stewart',
    location: 'New Hampshire',
    age: 37,
    favSubjects: ["Maths", "Social Studies"],
    className: "Web24",
    previousBackground: "Bartendor"
});
const amanda = new Student({
    name: 'Amanda',
    location: 'Myrtle Beach',
    age: 20,
    favSubjects: ["Arts", "Language Arts", "Digital Design", "Photography"],
    className: "Data Science",
    previousBackground: "Wedding Photographer"
});

const sam = new Instructor({
    name: 'Sam',
    location: 'Inglewood',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Perfect.`
});
const fredrick = new Instructor({
    name: 'Fredrick',
    location: 'Branson',
    age: 22,
    favLanguage: 'C#',
    specialty: 'Full Stack',
    catchPhrase: `Why isn't this working?`
});

const sabrina = new ProjectManager({
    name: 'Sabrina',
    location: 'Westchester',
    age: 33,
    favLanguage: 'MySQL',
    specialty: 'Back-end',
    catchPhrase: `Not like that!`,
    gradClassName: "Web24",
    favInstructor: "Daniel"
});
const gonzo = new ProjectManager({
    name: 'Gonz the Great',
    location: '404 Location Unknown',
    age: 999,
    favLanguage: 'All of them',
    specialty: 'Everything',
    catchPhrase: `Witness my GREATNESS.`,
    gradClassName: "Web99",
    favInstructor: "Gonzo"
});

console.log(stewart.sprintChallenge(stewart.favSubjects[1]));
console.log(amanda.previousBackground);
console.log(sam.catchPhrase);
console.log(fredrick.demo("Javascript IV"));
console.log(sabrina.debugsCode(stewart, "PHP Fundamentals"));
console.log(gonzo.grade(amanda, stewart.favSubjects[0]));
console.log(gonzo.speak());
console.log(gonzo.standUp('Web99'));

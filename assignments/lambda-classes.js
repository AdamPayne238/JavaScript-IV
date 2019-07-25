// CODE here for your Lambda Classes

class Person{
    constructor(PersonAttributes){
        this.name = PersonAttributes.name;
        this.age = PersonAttributes.age;
        this.location = PersonAttributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(IntstructorAttributes){
        super(IntstructorAttributes);
        this.specialty = IntstructorAttributes.specialty;
        this.favLanguage = IntstructorAttributes.favLanguage;
        this.catchPhrase = IntstructorAttributes.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(subject){
        return `${this.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Instructor{
    constructor(StudentAttributes){
        super(StudentAttributes);
        this.previousBackground = StudentAttributes.previousBackground;
        this.className = StudentAttributes.className;
        this.favSubjects = StudentAttributes.favSubjects;
    }
    listSubjects(){
        console.log(`${this.name}'s favorite subjects are:`)
        this.favSubjects.forEach(subject => console.log(subject));
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(ProjectManagerAttributes){
        super(ProjectManagerAttributes);
        this.gradClassName = ProjectManagerAttributes.gradClassName;
        this.favInstructor = ProjectManagerAttributes.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(subject){
        return `${this.name} debugs ${this.name}'s code on ${subject}`;
    }
}


//objects
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const adam = new Student({
    name: 'Adam',
    location: 'New York',
    age: '26',
    previousBackground: 'ruler of earth',
    className: 'WEB22',
    favSubjects: ['Html', 'CSS', 'JavaScript']
});

const david = new ProjectManager({
    name: 'David',
    location: 'California',
    age: '25',
    specialty: 'react',
    favLanguage: 'Python, C#, CSS',
    catchPhrase: `Hammer Time`,
    gradClassName: 'CS1',
    favInstructor: 'Sean'
});

console.log(fred.demo("Redux"));
console.log(fred.speak());
adam.listSubjects();
console.log(adam.PRAssignment("Redux Class"));
console.log(adam.sprintChallenge("JavaScript"));
console.log(david.standUp(22));
console.log(david.debugsCode("CSS"));
console.log(david.grade("Anatomy"));

'use strict';

// OOP

//Create a Person class with the properties: Name, Gender, Age,
//Interests,Bio,Greeting
class Person{
    constructor(name, gender, age){
        this._name = name;
        this._gender = gender;
        this._age = age;
    }
    setInterests(interestValue){
        this.interests = interestValue;
    }
    setBio(bioValue){
        this.bio = bioValue;
    }
    setGreeting(greetingValue){
        this.greeting = greetingValue
    }
}

//Create a new Teacher class which inherit methods from the Person 
//Class, add a super call()

class Teacher extends Person{
    constructor(name, gender, age, speciality){
        super(name, gender, age);
        this._speciality = speciality;
    }
    getSpeciality(){
        console.log(`${this._name} specializes in ${this._speciality}`);
    }
}


//Create a new Student class which interhis methods from the Person 
//Class, add a super call()

class Student extends Person{
    constructor(name, gender, age, subjects){
        super(name, gender, age);
        this._subjects = [];
        this._subjects.push(subjects);
    }
    getSubjects(){
        console.log(`${this._name} is enrolled in ${this._subjects}`);
    }
    addSubject(value){
        this._subjects.push(value);
        console.log(`${value} added to subjects`);
        console.log(`Current subjects are: ${this._subjects}`)
    }
}

//Instantiate multiple teacher and student objects and call methods 
//from the respective classes.

const mathTeacher = new Teacher("Mrs Blue", "F", 27, "Maths");
const englishTeacher = new Teacher("Mr Green", "M", 43, "English");
const artTeacher = new Teacher("Mx Rainbow", "X", 34, "Art");

mathTeacher.getSpeciality();
englishTeacher.getSpeciality();
artTeacher.getSpeciality();

const student1 = new Student("Goku", "M", 30, "Martial Arts");
student1.getSubjects();
student1.addSubject("Parenting");
student1.getSubjects();
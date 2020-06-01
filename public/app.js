/**************
//calculate BMI****



var markMass=70;
var markHeight=2.5;
var jonMass=60;
var jonHeight=2.5;
var markBoi=markMass/(markHeight*markHeight);
var jonBoi=jonMass/(jonHeight*jonHeight);

var isRight=markBoi>jonBoi;
console.log('is markboi is greater then jon '+ isRight);
*/
/********** 
//calculate avarage
var j_t1=89;
var j_t2=120;
var j_t3=103;
var m_t1=116;
var m_t2=94;
var m_t3=123;

var avrage_t1=(j_t1+j_t2+j_t3)/3;
var avrage_t2=(m_t1+m_t2+m_t3)/3;

if(avrage_t1>avrage_t2){
    console.log("john's team has maximum score "+avrage_t1);
}else{
    console.log("mark's team has maximum score "+avrage_t2);
}
*/




/*******
 * function
 * fuction is piece of code and one of the most programming principle
 */
/*function calculate_birth(birth_year){
    return 2020-birth_year;
}
var age=calculate_birth(1998);
console.log(age);
*/

//object and function

/*var jahn={
    name:'jahn',
    age: 23,
    job:'teacher'
}*/
/*
var Person=function(name,yearBirth,job){
    this.name=name;
    this.yearBirth=yearBirth;
    this.job=job;
    
}
Person.prototype.calculateAge=function(){
    console.log(2020-this.yearBirth);
}
Person.prototype.lastName='smith';

var jahn=new Person('jahn',1998,'teacher');
var uma=new Person('uma',1999,'disigner');
jahn.calculateAge();
uma.calculateAge();
console.log(jahn.lastName);






*/
/**
 * create a javaScript object 
 * by using javaScript prototype
 */
/*
var Person=function(firstName,lastName,yearOfBirth){
   this.firstName=firstName;
   this.lastName=lastName;
   this.yearOfBirth=yearOfBirth;
}

Person.prototype.calculateAge=function(){
    console.log(this.firstName+' '+ this.lastName);
    console.log(2020-this.yearOfBirth);
}

var ayush=new Person('ayush','gupta',1998);
var akshay=new Person('akshay','baliyan',1999);
var manikant=new Person('manikant','singh',1997);
ayush.calculateAge();
akshay.calculateAge();
manikant.calculateAge();
*/






//Object.create

/*var humanProto={
    calculateAge: function(){
        console.log(2020-this.yearOfBirth);
    }
};

var ayush=Object.create(humanProto);
ayush.name='ayush';
ayush.yearOfBirth=1990;
ayush.job='teacher';
*/



//IIFE(Imediately invoked function expresson)

/*
(function(){
    var score=5;
})();

*/



// closure
/**
 * inner functoin have access the variable of outer function is called closure */ 
/*
 function init(){
     var name='umashankar';
     function display(){
         alert(name);
     }
     display();
 }
 init();
}
*/
 /*
 function InterviewJob(job){
     return function(name){
         if(job ==='teacher'){
             console.log(name + ' what do you teach?');
         }
         else if(job ==='disgner'){
             console.log('what do you disign '+ name);
         }
         else{
             console.log(name + ' you have not any qualification!');
         }
     }

    }
    InterviewJob('teacher')('jahn');
*/



/**
 * call apply and bind in javaScript 
 */
var jahn={
    name:'jahn',
    age: 23,
    job: 'teacher',
    prasentation: function(style,dayOfTime){
        if(style==='formal'){
            console.log('Good ' + dayOfTime + ' ladies and gentals men', 
            ' I\'m ' + this.name + 
            ' ,I\'m '+ this.age +
             ' years old');
        }else if(style==='friendly'){
            console.log('Hey! What\'s up? ' +
             this.name + ' I\'m a ' +
              this.job + ' I\'m a '+ 
              this.age+ ' years old Have a nice '+ 
              dayOfTime);
        }
    }
};
var uma={
    name: 'uma',
    age: 23,
    job: 'engineer'
};
jahn.prasentation('formal','morning');
jahn.prasentation.call(uma,'friendly','morning'); //call
//jahn.prasentation.apply(uma,['friendly','morning']);
var fuma=jahn.prasentation.bind(uma,'formal');
fuma('evening');

// TypeScript is a superset of JavaScript. It offers features above and beyond what JavaScript gives us, which is useful while developing. For example, we can declare our data types, so if we accidentally try to pass a string as an argument to a function that is expecting an array, TypeScript will warn us that we're making a mistake. However, browsers understand JavaScript, not TypeScript. Therefore, TypeScript gets transpiled to JavaScript. The Angular community decided early on to adopt TypeScript as its main language of choice when writing Angular applications, and that is what we use here. Use this assignment to get used to writing TypeScript before jumping into Angular. However, keep in mind that TypeScript is optional and only offers benefits while developing, not in the final product.

// Copy the code snippets into the TypeScript Playground tool. Identify the errors found in each code snippet. You will see red bars in the Typescript side of the Playground where there is an error.

// Fix the errors in the Playground so that all the red bars are gone and the code still runs as desired.
// Make comments in the code to explain what each error was and how you fixed it.
// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.





// 1. Setting Types


//Fix this
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;


//Fixed
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "nine";
//change '9' from a number to 'nine' as a string bc myString is set as a string





//2.  Setting types for fucntion parameters


//Fix This
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));
 


//Fixed
function sayHello(name: any){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));
//i changed the datatype from 'string' to 'any' so that the console.log can print the string and number  






//3.Optional Paramters

//Fix This
function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 


 //Fixed
 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
//added the '?'  after the middleName filed to indicate that it is optional and that the other fields are required
//but that field is not






//4. Interfaces and fucntion parameters


//Fix This

interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay)); 


 //Fixed
 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 //added 's' after 'belt' in interface for 'jay'





 //5. Classes and function parameters


 //Fix this

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const shane = Ninja();
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));


//Fixed

class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("bubba", "kim");
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 
 
 const turing = new Ninja("Alan", "Turing");
 
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

 //created a new instance of the 'Ninja' class called 'turing' and I passed all the parameters in the 
 //datatypes that is required



 //6. Arrow functions


 //Fix this

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = x,y => x * y;
// Nor is this working:
var math = (x, y) => 
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];

//Fixed

var increment = (x: number) => x + 1;
// This works great:
console.log(increment(3));
var square = (x: number) => {x * x};
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x: number, y: number) => x * y;
// Nor is this working:
var math = (x: number, y: number) => {
   let sum: number = x + y;
   let product = x * y;
   let difference = Math.abs(x - y);
   return [sum, product, difference];
}

//first specified the values of each paramter 'x' is a number and 'y' is a number, and 'sum 'product' 
//and 'difference' are numbers too

//since math wants to return a array of numbers (sum, product, and difference), 




//7. Arrow functions and 'this'


//Fix This
class Elephant {
    constructor(public age: number){}
    birthday = function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

//Fixed
class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

 //Arrow functions are callable but not constructable

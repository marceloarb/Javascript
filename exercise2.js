//Complete the following problems:

/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//
let i = 0;
while (i < 11) {
    console.log(" the value of i in the loop is : " + i);
    i++
}




/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
//use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.
let sum;
let mult;
let div;

const all = () => {
    return console.log(mult / div);
}
const Add = (a, b) => {
    sum = a + b;
    return function multiply(c) {
        mult = sum * c;
        return mult;
    };
}
const power = (d) => {
    div = d * d;
    return div;
}
Add(30, 2)(20);
power(10);
all();

/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
//     20
// 0
// "zero";
const zero = 20;
// null
// "0"
// !""
// {}
// 125
// undefined
// ""
//  
// if(zero){
//     console.log("Variable "+zero+ " is defined")
// }
//     else{
//     console.log("Variable "+ arr[x] +" has not been defined")
// }
const arr = [
    "zero", 0, 28, null, "0", !"", {}, 125, undefined, "", zero
]
for (let x = 0; x < arr.length; x++) {
    if (arr[x]) {
        console.log("Variable " + arr[x] + " is defined")
    }
    else {
        console.log("Variable " + arr[x] + " has not been defined")
    }
}






/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";
switch (day) {
    case ("monday"):
        console.log("we got a long week ahead of us...");
        break;
    case ("tuesday"):
        console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        break;
    case ("wednesday"):
        console.log("We are smack dab in the middle of the week");
        break;
    case ("thursday"):
        console.log("Thursday night... the mood is right");
        break;
    case ("friday"):
        console.log("TGIF.  Friday truly is the best day of the week!");
        break;
    default:
        console.log("It's a weekend!")


}



/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*

-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

const yourself = class {
    constructor(name, age, gender, hobbies, profession, education) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobbies = hobbies;
        this.profession = profession;
        this.education = education;
    }
    learn() {
        console.log("My name is " + this.name);

    }
    poker(chips) {
        this.hobbies += chips;
        console.log("Look how many chips I have " + this.hobbies);
    }
}
const marcelo = new yourself("Marcelo", 26, "Male", poker = 80, "Software engineer", "Bacharel");
marcelo.learn();
marcelo.poker(50);

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

const Dog = class {
    constructor(breed, color, age) {
        this.breed = breed;
        this.color = color;
        this.age = age;
    }
}

Dog.prototype.ageInHumanYears = function () {
    console.log(this.age * 7)
};
const dog1 = new Dog("Labrador", "Brown", 3);
const dog2 = new Dog("Pitbull", "white", 5);
dog1.ageInHumanYears();
dog2.ageInHumanYears();

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------


// const Dog = {
//     ageInHumanYears: function(){
//         console.log(this.age * 7);
//     }
// };

// const dog1 = Object.create(Dog);
// dog1.breed = "Lab";
// dog1.color = "Brown";
// dog1.age = 4;
// console.log(dog1);
// dog1.ageInHumanYears();



/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

const favorite = () => {
    first(0x1fffffffffffff);
    second({});
    third(String);
    function first(a) {
        console.log("One of my favorite data type is the bigInt, because it allow to have very big numbers " + a);
    }
    function second(b) {
        console.log("Another one of my favorite data type is the object, where can be denifed as an un ordered collection of data " + b);
    }
    function third(c) {
        console.log("Another one of my favorite data type is the string, where we can have any word we want " + c);
    }
}

favorite()


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

const multiple = (x) => {
    return function fn(y) {
        return (x * y);
    };
}

let triple = multiple(3)(3);
console.log(triple);
triple = multiple(3)(6);
console.log(triple);


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds 
//" is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. 
//Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for
// the number of years.  Run the function returned by the higher order function to display the future value of the stock.  
let message = " is how much the stock has increased";
const futureValue = function stockGain(basis){
    return function years(yrs){
        let growth = basis*yrs*0.05+100;
        console.log(growth);
        return growth;
    }
}
futureValue(100)(12);


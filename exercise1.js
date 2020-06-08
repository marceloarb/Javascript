//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.
let celsius = 0;
const fahrenheitToCelsius = (temperature) => {
    temperature = temperature - 32;
    temperature = temperature * 5;
    temperature = temperature/9;
    celsius = temperature;
    return celsius;
}
fahrenheitToCelsius(70);
console.log(celsius);
// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

let fahrenheit = 0;
const celsiusToFahrenheit = (temperature) => {
    temperature = temperature * (9/5);
    temperature = temperature + 32;
    fahrenheit = temperature;
    return fahrenheit;
}
celsiusToFahrenheit(20);
console.log(fahrenheit);






/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

let voteAge = 18;
const canYouVote = (name,age) =>{
    if(age >= voteAge){
        console.log("Yes,"+name+" can vote!")
    }
    else{
        console.log("No,"+name+"cannot vote!")
    }
}

canYouVote("Marcelo",26);







/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.

let string = "The five boxing wizards jump quickly";
let array = string.split(" ");
console.log(array);
array = array.join(" ");
console.log(array);







/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

const reverseNumber = (number) => {
    let stringNumber = number.toString();
    let arrayNumber = stringNumber.split("");
    arrayNumber = arrayNumber.reverse();
    stringNumber = arrayNumber.join("");
    console.log(stringNumber);
    
}
reverseNumber(6173692334);





/************************************************************* */
// Problem 5:
// Write a JavaScript function that creates a car object using information about your car. Include the make, model, year, and color. 
//Write a function to get the year, color, make, and model in that order.

const car = class {
    constructor(make,model,year,color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    carType(){
        console.log(this.year+" "+this.color+" "+this.make+" "+this.model);
    }
    

}

const car1 = new car("Toyota","Tundra",2002,"Gray");
car1.carType();






/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.


for(let x = 0; x<=15; x++){
    if(x%2 == 0){
        console.log("This is a even number "+ x);
    }
    else{
        console.log("This is a odd number "+ x);
    }
}




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

for(let x = 1; x<=100; x++){
    if(x%3 == 0 & x%5 != 0){
        console.log("Tek");
    }
    if(x%5 == 0 & x%3 != 0){
        console.log("camp");
    }
    if(x%5 == 0 & x%3 == 0){
        console.log("Tekcamp");
    }
}


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first
// value in the nums array, and every 3rd number, i.e. 0, 3, 6,
// and 9: the zeroth, third, sixth, and ninth values.

for(let x = 0; x<nums.length; x++){
    if(nums[0] === nums[x]){
        console.log("The zeroth");
    }
    else if(nums[3] === nums[x]){
        console.log("The third")
    }
    else if(nums[6] === nums[x]){
        console.log("The sixth")
    }
    else if(nums[9] === nums[x]){
        console.log("The ninth")
    }
}



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.
let school = foodArray[foodArray.length-1];
console.log(school);

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both the foodArray and the adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

for(let x = 0; x<foodArray.length; x++){
    if(foodArray[x][foodArray[x].length-1] == 's'){
        console.log(foodArray[x]+" are "+ adjectiveArray[x]);
    }
    else{
        console.log(foodArray[x]+ " is "+ adjectiveArray[x]);
    }
}

/************************************************************* */
// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [
    function Divide(a,b){
        console.log("Division");
        x = a/b;
        return x;
    },
    function Multiply(a,b){
        console.log("Multiplication");
        x = a*b;
        return x;
    },
    function Add(a,b){
        console.log("Sum");
        x = a+b;
        return x;
    },
    function Subtract(a,b){
        console.log("Subtraction");
        x = a-b;
        return x;
    }];
x=0;
function doMath() {
    let random = operations[Math.floor(Math.random()*operations.length)]
    return random;
};


console.log(doMath()(2,2));
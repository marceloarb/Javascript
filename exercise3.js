//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 

// const string = (str)=>{
//     if(str === " "){
//         console.log(true);
//     }
//     else{
//         console.log(false);
//     }
// }
// string(" ");






/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

let str = "Learning JavaScript is fun!";
let arr = str.split(" ");
arr[arr.length-1] = "cool!";
str = arr.join(" ");
console.log(str);





/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. 
//Use an arrow function and one of the built-in array methods. 
// const squaredArray = [];
// const array = (arr)=>{
//     for(let x = 0; x<arr.length; x++){
//         arr[x] = arr[x]*arr[x];
//         squaredArray.push(arr[x]);
//     }
//     return squaredArray;
// }
// array([1,2,3,4,5]);
// console.log(squaredArray);






/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. 
//Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.
// const arrayGreaterThan3 = [];
// const array = (arr)=>{
//     for(let x = 0; x<arr.length; x++){
//         if(arr[x] > 3){
//             arrayGreaterThan3.push(arr[x]);
//         }
//         else{
//         }
        
//     }
//     return arrayGreaterThan3;
// }
// array([1, 3, 5, 7, 9, 1, 3, 5.]);
// console.log(arrayGreaterThan3);





/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. 
//Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 

const array = (arr)=>{
        console.log(arr.reduce((a, b) => a + b));
        
}
array([1,2,3,4,10]);






/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. 
//For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  


const DNA = (dna)=>{
    let arrDna = dna.split("");
    return arrDna;
}
console.log(DNA("CGAT"));





/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  
//Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  
//("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];
let max = [0];
function maxNumber(numbers) {
    
    for(let x = 0; x<numbers.length; x++){
        
        if(numbers[x]=="two"){
            numbers[x]=2;
        }
                
        else if(numbers[x]=='one'){
            numbers[x]=1;
        }
        else if(numbers[x]=="three"){
            numbers[x]=3;
        }
        else if(numbers[x]=="3"){
            numbers[x]=3;
        }
        else if(typeof numbers[x] != 'number'){
            numbers.splice(x,1);
            x--;
        }
        else if(numbers[x]>max){
            max = numbers[x];
        }

    }
        
        
    
    return console.log(max);
}

maxNumber(numbers);

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    numbers.sort((a,b)=>a-b);
    return console.log(numbers);
};
sortNums(numbers);




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  
//The key is the example data type, and the value is the name of the data type. 
// An object data type has already been set as the 1st key / val pair.

// let mapObj = new Map()
// mapObj.set({company : "TEKsystems"},"object") ;





// console.log(mapObj.has({company : "TEKsystems"})); 
// console.log("It prints false because it is being use incorrectly"); 
//The above console.log() statmeent returns false.  
//Write another console.log() statement explaining why this line of code prints false. 
// Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

let mapObj = new Set(['company', 'TEKsystems',
'object', person = {first_name: "Marcelo", last_name: 'Barbosa'},
'bigInt', "Works to have a big numerical data",
'string', 'Works to user words',
'boolean', true]);

console.log(mapObj);


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.
for(let x = 0; x<ones.length/2; x++){
    let temp = ones[x]
    ones[x]=ones[ones.length-1-x];
    ones[ones.length-x-1]=temp;
}
console.log(ones);


/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function. 
// It should return the output of the callback function.

function performer(cb) {
    
    return cb;
}
function callback(){
    let sum = 20*20;
    return sum;
}
console.log(performer(callback()));
/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here. 
// Be sure to write comments explaining what the feature is and why it is useful.



//Example: Default Parameteres.
var es5 = function(string,number){
    var string = string || "That is the way it was before";
    var number = number || 50;
}

const es6 = (string = "That is the way we can do now",number=50)=>{
    
}
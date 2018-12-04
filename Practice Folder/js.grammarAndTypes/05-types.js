// Booleans
// What is a boolean
var on = true;
console.log(on); // true
let off = false;
console.log(off); // false

//boolean can represent: true/false, yes/no, on/off

//null = empty value (not 0; not undefined)

var empty = null;
console.log(empty); // null

/*
We've talked befor about how every variabe is basically a storage containter in JavaScript 
think of variables with null and undefined as packages coming out of UPS 
null packages are packages that were intentionall packed up with nothing, but have assembled to leave
*/

// Numbers
var degrees = 90;
console.log(degrees);

var precise = 99999999999999999; // 15 9's
console.log(precise);  // 9999999999999999

var rounded = 9999999999999999; // (one mmore 9)
console.log(rounded); // 100000000000000

var notquite = 0.2 + 0.1;
console.log(notquite); // 0.30000000000004

var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard); // 0.3

let stringOne = "double quotes";
let stringTwo = 'single quote'; 
console.log(stringOne, stringTwo); // double quotes single quotes

// Numbers vs. Strings
let first = 1050 + 100; //1150
let second = '1050' + '100';

console.log(first);
console.log(second);
console.log(typeof first);
console.log(typeof second);

/*
Addition vs. Concatenation'100;

When S=JS sees combining two or more numbers, it adds the values together using the built in math funtionality
when it see adding together one or more strings
*/

let third = 1050 + '100';
console.log(third); / 1050100
console.log(typeof third) // string

/*
Challenge:
Set 7 (or 8) variables;
firstName
lastName
houseNumber
aptNumber (if applicable)
street
city
state
zipcode

Set each variable to its respective type.

console.log your whole address (with the space between variable).
*/

var firstname = "Tim"
var lastname = "Wampler"
console.log(firstname, lastname)

var housenumber = "3067"
var streetname = "Chapel"
console.log(housenumber, streetname)

var city = "Anderson,"
var state = "Indiana"
console.log(city, state)


Has keys and values (color (key):
// Objects
/*
What is an object?

A container that can hold multiple datatypes

Denoted by {}
Has keys and values (color (key): 'blue' (value)), separated with a  colon
Each key separated with a comma
/*

let burritosNow = {
    size: 'large',
    quantity: 4,
    now: true
},
console.log(burritosNow);
console.log(typeof burritosNow); //object

/*
Arrays are great for lists

Denoted by []
Has values ('blue', 'green', 'yellow'), separted with commas
/*

var burritos - ['large', 4, true];
console.log(burritos); / ['large', 4, true]

console.log(typeof burritos); // OBJECT
/*






let burritosNow = {}












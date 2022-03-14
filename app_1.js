// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple Javascript console.log statement
function printHello(){
    console.log("Hello there!");
}    

// Take two numbers and adds them
function addition(a, b){
    return a + b ;
}

console.log(addition(4, 5));
//functions can call other functions
function doubleAddition(c, d){
    var total = addition(c,d) * 2;
    return total;
}

// console.log(addition(65, 34) *2);
//console.log(addition(4, 5) *2);

// start on 11.3.3


// Simple JavaScript log statement
function printHello() {
    return "Hello there!";
  }


  printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
    return a + b;
  }


// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }



doubleAddition = (c, d) => addition(c, d) * 2;
doubleAddition = (33, 25 ) => addition (33, 25) *2;

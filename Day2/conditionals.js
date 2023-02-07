// If I intended this to be a comment

/* 
Here we can place
multiple lines
of comments
no worries
*/
var boolean /* interline comment? */ = true; //this is a comment after // 

console.log( 1 == '1') 
console.log( 1 === '1')

// combining conditions

var isCool = true;
var size = 7
// and &&         true AND false === false    
// or ||          true OR false === true
if (isCool && size === 8){
    console.log("Lets buy em!")
} else {
    console.log("Not for us")
}



var num1 = 20;
var num2 = 5;
if (num1 < num2) {
    num2 = num2 * num1;
} else {
    num1 = num1 / num2;
    if (num1 < num2){
        num1 = num1 * 2;
    } else if (num1 == num2){
        num2 = num1 * num2;
    } else {
        num2 = num2 * 2;
    }
}
console.log(num1);
console.log(num2);
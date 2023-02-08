for (
    var num = 1; //variable declarations <-- runs once
     num <= 5; //conditional determine whether the loop continues 
     num++ // iteration clause run once at THE END of every loop --  num = num + 1
            // should trend towards ending the loop by breaking the conditional
     ) {
    console.log(num);
}

for (var num = 1.1; num <= 5; num++){
    console.log(num)
    console.log("Floored num " + Math.floor(num) )
}

// all three clauses are OPTIONAL
var num2 = 10;
for (;num2 >0; num2--){
    console.log(num2)
}

console.log("After the loop: " + num2)


var amIDivisibleBy5 = 18;
// % is modulo
if (amIDivisibleBy5 % 5 == 0){
    console.log("Yes")
} else {
    console.log("Guess not?")
}

var roundMe = -1.2
var roundMeAlso = 1.2

console.log(Math.floor(roundMeAlso))

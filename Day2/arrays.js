var favFoods = ["lentils"];

favFoods.push("Reese's");
favFoods.push("sushi");

console.log(favFoods)

// favFoods[0] = "steak"

//perform a swap
var temp = favFoods[0] // this is holding on to lentils
favFoods[0] = favFoods[favFoods.length-1] // [ 'sushi', "reese's", 'sushi']
favFoods[favFoods.length-1] = temp // this line is unnecessary if we just want to get rid of lentils

favFoods.pop()

console.log(favFoods)


var letter = "B"
var number = 7

console.log(number + letter)
function cafe(size, milkChoice){  // defining a new function , called ourFunction
    console.log("I'm starting your coffee"); 
    console.log("Your coffee is ready");
    return size + " black coffee with " + milkChoice; 
}

console.log(cafe("smol","nothing"));
console.log(cafe("large", "half and half"));
console.log(cafe("jumbo", "almond milk"));
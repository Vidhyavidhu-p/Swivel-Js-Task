
//  Object destructuring with default values
let person = { name: "js", age: 30 };
let { city = "Ambai", state = "tamilnadu" } = person;
console.log(city);   
console.log(state);  

//  Array destructuring
let fruit = ["apple", "grapes", "orange", "mango", "strawberry"];
let [fruit1, fruit2, fruit3] = fruit;   
console.log(fruit1);  
console.log(fruit2); 
console.log(fruit3);  



// Swapping using destructuring
let fname = 50;
let name1 = "js";  
[fname, name1] = [name1, fname];
console.log(fname);   
console.log(name1);   

//  Map
let fruits = new Map([["apple", 20], ["grapes", 30], ["mango", 40]]);
console.log(fruits);

let f1 = "";
for (let [key, value] of fruits) {
f1 += "<p>" + key + " is " + value + "</p>";
}
document.write(f1);



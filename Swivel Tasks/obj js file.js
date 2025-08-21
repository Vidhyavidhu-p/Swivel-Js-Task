/*let obj = { name: "vidhya", age: 21, city: "Tirunelveli" };
//console
console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

//document
document.write(obj.name);

//alert
alert(obj.name);*/

//Another method
let obj={ 
   name:"Sri",
   age:30,
   city:"Ambai",
   greet: function()
{
console.log("hello  "+this.name);
document.write("<h1> Hello "+this.name+"</h1>");
document.write("<h3> your age is  "+this.age+"</h3>");
}
};
obj.greet();
delete obj.city;
console.log(obj);
let key="name";
let obj1={[key]:"js"};
console.log(obj1.name);
let fruit=["apple","grapes"];
console.log(obj instanceof Object);
console.log(fruit instanceof Object);
console.log(obj instanceof Array);

let obj3={
   name:"swetha",
   age:25,
   address:
{
 door:12,
 street:"anna salai",
 city:"tenkasi",
 zip:627425
}
};
console.log(obj3.name);
console.log(obj3.address);
console.log(obj3.address.door);
console.log(obj3.address.street);
console.log(obj3.address.city);
console.log(obj3.address.zip);
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3))
Object.freeze(obj3);
obj3.age=31;
console.log(obj3.age);
console.log("address" in obj3);

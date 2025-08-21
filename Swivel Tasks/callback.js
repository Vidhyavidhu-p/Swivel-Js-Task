console.log("This is callback Function Output");
function myDisplay(some)
{
console.log(some);
}
function show()
{
myDisplay("show");
}
let show2=()=>console.log("show2");
show();
show2();
let var1=(function(){
let x=parseFloat(prompt("Enter a x value"));
let y=parseFloat(prompt("Enter a y value"));
return x-y;
})();
console.log(var1);

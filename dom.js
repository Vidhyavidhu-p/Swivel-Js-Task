//dom Tag name Output
let tag=document.getElementsByTagName("h1");
tag[0].innerHTML="Today Task Dom Task output tag name";
tag[0].style.color="red";
tag[0].style.border="5px dotted black";
tag[0].style.backgroundColor="blue";
tag[0].style.textAlign="center";



// dom class name output 
let dom=document.getElementsByClassName("example");
dom[0].innerHTML="This is Dom Class Name output";
dom[0].style.color="blue";
dom[0].style.backgroundColor="black";
dom[0].style.padding="30px";
dom[0].style.fontSize="50px";


//dom Id name output
let c=document.getElementById("myname");
c.innerHTML="<h1> Welcome to your change now!!!</h1>"
c.style.cursor="pointer";
c.style.textAlign="right";
c.style.margin="50px";
c.style.border="3px dashed red";



let d=document.getElementById("hello");
d.onmouseover=function(){
this.style.backgroundColor="red";
this.style.color="pink";

}
d.onmouseout=function(){
this.style.backgroundColor="yellow";
this.style.color="black";
}
let g=document.getElementById("game");
g.onmouseover=function(){
this.style.backgroundColor="green";
this.style.color="white";
this.style.border="5px solid blue";
}

g.onmouseout=function(){
this.innerHTML="mouse out you show orange color";
this.style.backgroundColor="orange";
this.style.color="red";
}



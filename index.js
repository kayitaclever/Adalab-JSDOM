document.getElementById("heading").style.color="green";

document.getElementById("intro").innerHTML="My name is Clever I am old enough.";
document.getElementById("intro").style.fontSize="24px"
let paragraph= document.createElement("p");
paragraph.innerHTML="I am new"
paragraph.style.fontSize="24PX"
document.getElementById("container").appendChild(paragraph);
// document.getElementById("container").removeChild(paragraph);

let child=document.getElementById("container").children;
console.log({child})

let button= document.getElementById("button");
button.addEventListener("click",function(){
    button.innerHTML="Clicked !!!"
})

document.getElementById("container").setAttribute("class","containers");


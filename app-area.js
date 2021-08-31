//taking variables from HTML world to Javascript world
var base=document.querySelector("#base");
var height=document.querySelector("#height");

var area=document.querySelector("#area");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.

calculateButton.addEventListener("click", calculateArea);
function calculateArea()
{  
    base=Number(base.value);
    height=Number(height.value);
    var area=.5*base*height;
    outputMsg(`Area is ${area}`) ;
}

function outputMsg(message)
{   hypo.innerHTML=message;
}

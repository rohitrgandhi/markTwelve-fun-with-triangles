//taking variables from HTML world to Javascript world
var base=document.querySelector("#base");
var height=document.querySelector("#height");

var hypo=document.querySelector("#hypo");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.

calculateButton.addEventListener("click", calculateHypotenuse);
function calculateHypotenuse()
{  
    base=Number(base.value);
    height=Number(height.value);
    var hypotenuse=Math.sqrt(Math.pow(base,2)+Math.pow(height,2));
    outputMsg(`Hypotenuse formula
    √(base² + height²)`);
    outputMsg(`The length of hypotenuse is ${hypotenuse}`) ;
}

function outputMsg(message)
{   hypo.innerHTML=message;
}

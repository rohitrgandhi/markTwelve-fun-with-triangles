//taking variables from HTML world to Javascript world
const base=document.querySelector("#base");
const height=document.querySelector("#height");

const area=document.querySelector("#area");

const calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.

function areaCalculate(b, h){
const areaTriangle= 0.5 * b * h;
return areaTriangle;
}
function calculation()
{  
    const areaofTriangle=areaCalculate(Number(base.value),Number(height.value));
    area.innerText="The area is " + areaofTriangle + " sq. units";
}
calculateButton.addEventListener("click", calculation);


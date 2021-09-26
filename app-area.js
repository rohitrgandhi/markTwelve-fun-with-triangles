//taking variables from HTML world to Javascript world
const base=document.querySelector("#base");
const height=document.querySelector("#height");

const area=document.querySelector("#area");

const calculateButton=document.querySelector("#button");

function areaCalculate(b, h){
const areaTriangle= 0.5 * b * h;
return areaTriangle;
}

function calculation()
{    
        if((base.value>0) && (height.value>0) )
        {
        const areaofTriangle=areaCalculate(Number(base.value),Number(height.value));
        area.innerText="The area is " + areaofTriangle + " sq. units";
        } 
        else area.innerText="Enter base and height greater than 0";
}


//when button is clicked "calculation" function is called.
calculateButton.addEventListener("click", calculation);


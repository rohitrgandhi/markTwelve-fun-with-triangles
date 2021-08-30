//taking variables from HTML world to Javascript world
var angle1=document.querySelector("#angle1");
var angle2=document.querySelector("#angle2");

var angle3=document.querySelector("#angle3");

var output=document.querySelector("#output");

var calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.

calculateButton.addEventListener("click", isTriangle);
function isTriangle()
{   angle1=Number(angle1.value);
    angle2=Number(angle2.value);
    angle3=Number(angle3.value);
    var flag=errorHandler(angle1,angle2,angle3);
    if(flag===true)
        {   
            var add=calculateSumofAngles(angle1,angle2,angle3)
            
            if(add===180)
            {
                outputMsg(`${angle1}, ${angle2} and ${angle3} FORM a triangle.`) ;
                output.style.color="green";
            }
        
            else
            {
                outputMsg(`${angle1}, ${angle2} and ${angle3} DO NOT FORM a triangle.`)
                output.style.color="red";
            }
        }
    else{
        outputMsg(`Angle of a triangle should be greater than 0 and less than 180.`)
        } 
}
function calculateSumofAngles()
{
    var add=angle1+angle2+angle3;
    return add;
}
function outputMsg(message)
{   output.innerHTML=message;
}

function errorHandler(angle1,angle2,angle3)
{
    if ((angle1>0&&angle1<180) && (angle2>0 && angle2<180) && (angle3>0 && angle3<180))
    {
        return true;
    }
    else{
        return false;
    }
}
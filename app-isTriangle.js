//taking variables from HTML world to Javascript world
const angle1=document.querySelector("#angle1");
const angle2=document.querySelector("#angle2");
const angle3=document.querySelector("#angle3");

const output=document.querySelector("#output");

const calculateButton=document.querySelector("#button");

//when button is clicked calculate function is called.

function isTriangle()
{   
    const flag=errorHandler(Number(angle1.value),Number(angle2.value),Number(angle3.value));
    if(flag===true)
        {   
            const add=calculateSumofAngles(Number(angle1.value),Number(angle2.value),Number(angle3.value))
            
            if(add===180)
            {
                output.innerText="Angles FORM a triangle";
                output.style.color="green";
            }
        
            else
            {
                output.innerText="Angles DO NOT FORM a triangle";
                output.style.color="red";
            }
        }
    else{
        output.innerText="Angle of a triangle should be greater than 0 and less than 180.";
        } 
}
function calculateSumofAngles(angle1,angle2,angle3)
{
    const add=angle1+angle2+angle3;
    return add;
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

calculateButton.addEventListener("click", isTriangle);
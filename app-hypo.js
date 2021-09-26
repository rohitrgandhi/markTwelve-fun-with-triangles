//taking variables from HTML world to Javascript world
const base=document.querySelector("#base");
const height=document.querySelector("#height");

const hypo=document.querySelector("#hypo");

const calculateButton=document.querySelector("#button");
function calculateSumOfSquare(b, h) {
    const sumOfSquares = b * b + h * h;
    return sumOfSquares;
  }
function calculateHypotenuse()
{  
    if((base.value>0) && (height.value>0) ){
    const sumOfSquares = calculateSumOfSquare(
        Number(base.value),Number(height.value));
    const hypotenuse=Math.sqrt(sumOfSquares);
    hypo.innerText="The length of hypotenuse is " + hypotenuse.toFixed(2) + " units";
}
else hypo.innerText="Enter base and height greater than 0";
}


//when button is clicked 'calculateHypotenuse' function is called.
calculateButton.addEventListener("click", calculateHypotenuse);
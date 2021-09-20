//taking variables from HTML world to Javascript world
const base=document.querySelector("#base");
const height=document.querySelector("#height");

const hypo=document.querySelector("#hypo");

const calculateButton=document.querySelector("#button");

//when button is clicked 'calculate' function is called.

function calculateSumOfSquare(b, h) {
    const sumOfSquares = b * b + h * h;
    return sumOfSquares;
  }
function calculateHypotenuse()
{  
    const sumOfSquares = calculateSumOfSquare(
        Number(base.value),Number(height.value));
    const hypotenuse=Math.sqrt(sumOfSquares);
    hypo.innerText="The length of hypotenuse is " + hypotenuse;
}

calculateButton.addEventListener("click", calculateHypotenuse);
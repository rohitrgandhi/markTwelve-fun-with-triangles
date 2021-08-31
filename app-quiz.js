//taking variables from HTML world to Javascript world
const quizForm=document.querySelector(".quiz-form");

const output=document.querySelector("#output");

const calculateButton=document.querySelector("#button");

const correctAnswers=["180","sqrta2pb2","ab"];

calculateButton.addEventListener("click",calculateMarks);

function calculateMarks(){
    let score=0;
    let i=0;
    const formResults= new FormData(quizForm);
    for(let value of formResults.values())
    {   
        if(value===correctAnswers[i])
            {
                score++;
            }
            i++;
    }
    output.innerText="Your marks=" + score;
}

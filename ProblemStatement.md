## Problem Statement
Ask the user to input three angles and you say whether the angles make a triangle or not.
Prepare a Quiz and enable the user to play the quiz and calculate scores based on the answers chosen by the user.
Calculate hypotenuse of a triangle given the other two sides
Calculate area of a triangle given the base and height of a triangle
Here's the link to the actual problem statement.
Tech Stack Used
Html, css, and Javascript

What are we going to build?
Is Triangle?

## Problem 1: Is Triangle?
ex-01: Structure the html for Is Triangle Problem
challenge
Create three inputs to get the angles of a triangle from the user
Create a button Is Triangle? to check if the angles form triangle or not
Create a h2 tag to show the output

ex-02: Select the elements using queryselector
challenge
Use querySelectors to select the three input tags , button tag and the h1 tag

understanding
querySelectorAll
ex-03: Create a function isTriangle
challenge
Create a function isTriangle which checks if the angles form a triangle or not
Calculate the sum of the angles using a function calculateSumOfAngles
if sumOfAngles equal 180 degrees, then the angles form a triangle, else they don't form a triangle
Check the results in the console
understanding
Typecasting
ex-04: Display the output
challenge
Display the output in the DOM

## Problem 2: Triangle Quiz
ex-05: Structure the html for Triangle Quiz
challenge
Create a form that contains the quiz container and a button to submit the form
Make sure that the quiz container has a question and radio buttons for options
Create a h2 tag to show the output
Questions
Question1: What is the third angle for the triangle where angle1 = 45° and angle2 = 45°?

Options: 45° , 90° , 60°

Answer: 90°

Question2: If a triangle has an angle of 90 degrees, what is it called?

Options: obtuse , acute , right angled

Answer: right angled

ex-06: Select the elements using querySelector
challenge
Use querySelector to select the form tag, submit button and the h2 tag
ex-07: Create an array of answers
challenge
Create an array of answers for the questions. This array is used to compare the correct answer with the user checked answer
const correctAnswers = ['90°', 'right angled']; 
ex-08: Create a function
Create a function calculateScore which is used to calculate the score based on the user's answers
Initialize variables score(to keep track of user's score) and index(to access the correctAnswers array)
Use FormData API to get the data from the form
const data = new FormData(quizForm);
Iterate through the data to calculate score,
if the value in the FormData equals the correctAnswers array, increment the score
Increment the index to access the next element in the correctAnswers array
Check the results in the console
understanding
How FormData works
ex-09: Display the output
challenge
Display the output in the DOM
Bonus (Optional)
Template literals

## Problem 3: Calculate hypotenuse of a triangle
What is hypotenuse ?
In a right angled triangle, hypotenuse is the longest side, the side opposite the right angle.

Length of the hypotenuse c = sqrt ( a² + b² )

ex-10: Structure the html
challenge
Create two inputs to get the length of two sides of a right angled triangle
Create a button Calculate Hypotenuse to check the output
Create a h2 tag to show the output
ex-11: Select the elements using querySelector
challenge
Use querySelector to select the input tags, Calculate Hypotenuse button and h2 tag
ex-12: Create a function
challenge
Create a function calculateHypotenuse which calculates the length of the hypotenuse.
understanding
Math.sqrt()
ex-13: Display the output
challenge
Display the output in the DOM
ex-14: Club them together!
challenge
Create a navbar and navigate through different
Homework

## Problem 4: Calculate Area of Triangle
Area of Triangle A = 1/2 (base * height)

Hint: Follow the same approach as Problem 3

Bonus (Optional)
Create the same application using React to get a good hold in reactJS
Create an application by taking another shape and calculate area

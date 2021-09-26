# markTwelve (Build Basics)

**Problem Statement:**
1 Ask the user to input three angles and you say whether the angles make a triangle or not.
2 Prepare a Quiz and enable the user to play the quiz and calculate scores based on the answers chosen by the user.
3 Calculate hypotenuse of a triangle given the other two sides
4 Calculate area of a triangle given the base and height of a triangle

## Problem 1: Is Triangle?
# ex-01: Structure the html for Is Triangle Problem
Challenge:
- Create three inputs to get the angles of a triangle from the user
- Create a button Is Triangle? to check if the angles form triangle or not
- Create a h2 tag to show the output

# ex-02: Select the elements using queryselector
Challenge:
- Use querySelectors to select the three input tags , button tag and the h1 tag

Understanding
- querySelectorAll

# ex-03: Create a function isTriangle
Challenge:
- Create a function isTriangle which checks if the angles form a triangle or not
- Calculate the sum of the angles using a function calculateSumOfAngles
- if sumOfAngles equal 180 degrees, then the angles form a triangle, else they don't form a triangle
- Check the results in the console

Understanding
- Typecasting

# ex-04: Display the output
Challenge:
- Display the output in the DOM
- 
**Problem 2: Triangle Quiz**
**ex-05: Structure the html for Triangle Quiz
challenge**
- Create a form that contains the quiz container and a button to submit the form
- Make sure that the quiz container has a question and radio buttons for options
- Create a h2 tag to show the output

**ex-06: Select the elements using querySelector**
Challenge:
Use querySelector to select the form tag, submit button and the h2 tag

**ex-07: Create an array of answers**
Challenge:
Create an array of answers for the questions. This array is used to compare the correct answer with the user checked answer
const correctAnswers = ['90°', 'right angled']; 

**ex-08: Create a function**
- Create a function calculateScore which is used to calculate the score based on the user's answers
- Initialize variables score(to keep track of user's score) and index(to access the correctAnswers array)
- Use FormData API to get the data from the form
- const data = new FormData(quizForm);
- Iterate through the data to calculate score,
- if the value in the FormData equals the correctAnswers array, increment the score
- Increment the index to access the next element in the correctAnswers array
- Check the results in the console

Understanding:
- How FormData works

**ex-09: Display the output**
Challenge:
- Display the output in the DOM

**Problem 3: Calculate hypotenuse of a triangle**
What is hypotenuse ?
In a right angled triangle, hypotenuse is the longest side, the side opposite the right angle.
Length of the hypotenuse c = sqrt ( a² + b² )

**ex-10: Structure the html**
Challenge:
- Create two inputs to get the length of two sides of a right angled triangle
- Create a button Calculate Hypotenuse to check the output
- Create a h2 tag to show the output

**ex-11: Select the elements using querySelector**
Challenge:
- Use querySelector to select the input tags, Calculate Hypotenuse button and h2 tag

**ex-12: Create a function**
Challenge:
- Create a function calculateHypotenuse which calculates the length of the hypotenuse.

Understanding:
- Math.sqrt()

**ex-13: Display the output**
challenge
- Display the output in the DOM

**ex-14: Club them together!**
challenge
- Create a navbar and navigate through different

## Problem 4: Calculate Area of Triangle
- Area of Triangle A = 1/2 (base * height)

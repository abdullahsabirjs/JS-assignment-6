// ! CHAP # 35-38

// ? Q 1
// function displayCurrentDateTime() {
//     const currentDate = new Date();
//     const dateTimeString = `Current Date and Time: ${currentDate.toLocaleString()}`;


//     const paragraph = document.createElement("p");
//     paragraph.textContent = dateTimeString;
//     document.body.appendChild(paragraph);
// }
// displayCurrentDateTime();



// ? Q 2
// function greetUser() {
//     var firstName = prompt("Please enter your first name:");
//     var lastName = prompt("Please enter your last name:");
//     var fullName = firstName + ' ' + lastName;
//     var greeting = 'Hello, ' + fullName + '! Welcome to our website.';

//     alert(greeting);
// }
// greetUser();



// ? Q 3
// function addTwoNumbers() {
//     var number1 = parseFloat(prompt("Enter the first number:"));

    
//     var number2 = parseFloat(prompt("Enter the second number:"));

//     if (isNaN(number1) || isNaN(number2)) {
//         return "Invalid input. Please enter valid numbers.";
//     }
//     var sum = number1 + number2;

//     return "The sum of " + number1 + " and " + number2 + " is: " + sum;
// }

// var result = addTwoNumbers();
// alert(result);



// ? Q 4
// function calculate(num1, num2, operator) {
//     var num1 = parseFloat(num1);
//     var num2 = parseFloat(num2);

//     if (isNaN(num1) || isNaN(num2)) {
//         return "Invalid input. Please enter valid numbers.";
//     }

//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 return "Division by zero is not allowed.";
//             }
//             result = num1 / num2;
//             break;
//         default:
//             return "Invalid operator. Please use +, -, *, or /.";
//     }

//     return "Result of " + num1 + " " + operator + " " + num2 + " is: " + result;
// }

// // Example usage:
// var num1 = prompt("Enter the first number:");
// var operator = prompt("Enter the operator (+, -, *, /):");
// var num2 = prompt("Enter the second number:");

// var result = calculate(num1, num2, operator);
// document.write(result);



// ? Q 5
// function squareNumber() {

//     var userInput = prompt("Enter a number:");

//     var number = parseFloat(userInput);
//     if (isNaN(number)) {
//         return "Invalid input. Please enter a valid number.";
//     }
//     var square = number * number;

//     return "The square of " + number + " is " + square;
// }
// var result = squareNumber();
// alert(result);



// ? Q 6
// function factorial() {
//     var userInput = prompt("Enter a number:");

//     var number = parseFloat(userInput);

//     if (isNaN(number)) {
//         return "Invalid input. Please enter a valid number.";
//     }

//     function calculateFactorial(n) {
//         if (n < 0) {
//             return "Factorial is undefined for negative numbers";
//         } else if (n === 0) {
//             return 1; // 0! is defined as 1
//         } else {
//             return n * calculateFactorial(n - 1);
//         }
//     }

//     var result = calculateFactorial(number);

//     return "The factorial of " + number + " is " + result;
// }

// var factorialResult = factorial();
// alert(factorialResult); // Display the result in a pop-up alert



// ? Q 7
// function countNumbers() {
//     var start = parseInt(prompt("Enter the start number:"));
//     var end = parseInt(prompt("Enter the end number:"));

//     if (isNaN(start) || isNaN(end)) {
//         return "Invalid input. Please enter valid numbers.";
//     }

//     if (start <= end) {
//         for (var i = start; i <= end; i++) {
//             document.write(i + " ");
//         }
//     } else {
//         for (var i = start; i >= end; i--) {
//             document.write(i + " ");
//         }
//     }
// }

// // Call the function to take user input and display the counting sequence
// countNumbers();



// ? Q 8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(number) {
//         return number * number;
//     }

//     var baseSquare = calculateSquare(base);
//     var perpendicularSquare = calculateSquare(perpendicular);

//     var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

//     return hypotenuse;
// }

// var baseLength = parseFloat(prompt("Enter the length of the base:"));
// var perpendicularLength = parseFloat(prompt("Enter the length of the perpendicular:"));

// var result = calculateHypotenuse(baseLength, perpendicularLength);
// alert("The hypotenuse of the right-angle triangle is: " + result);



// ? Q 9
// function calculateRectangleArea() {

//     var width = parseFloat(prompt("Enter the width of the rectangle:"));
//     var height = parseFloat(prompt("Enter the height of the rectangle:"));

//     if (isNaN(width) || isNaN(height)) {
//         document.write("Invalid input. Please enter valid numbers for width and height.");
//         return;
//     }

//     var area = width * height;

//     document.write("The area of the rectangle is: " + area);
// }

// calculateRectangleArea();



// ? Q 10
// function isPalindrome(str) {

//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

 
//     return str === str.split('').reverse().join('');
// }

// var inputString = "madam";
// var result = isPalindrome(inputString);

// if (result) {
//     document.write(inputString + " is a palindrome.");
// } else {
//     document.write(inputString + " is not a palindrome.");
// }



// ? Q 11
// function capitalizeWords(inputString) {
    
//     var words = inputString.split(" ");

//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }
//     var result = words.join(" ");

//     return result;
// }

// function convertAndDisplay() {
//     var userInput = prompt("Enter a string:");

//     if (userInput) {
//         var capitalizedString = capitalizeWords(userInput);
//         document.write("Original String: " + userInput + "<br>");
//         document.write("Capitalized String: " + capitalizedString);
//     } else {
//         document.write("No input provided.");
//     }
// }

// convertAndDisplay();



// ? Q 12
// function findLongestWord(inputString) {
//     var words = inputString.split(" ");

//     var longestWord = "";
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         var word = words[i];

//         var wordLength = word.replace(/[^a-zA-Z0-9]/g, '').length;

//         if (wordLength > maxLength) {
//             maxLength = wordLength;
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// function findAndDisplayLongestWord() {
//     var userInput = prompt("Enter a string:");

//     if (userInput) {
//         var longestWord = findLongestWord(userInput);
//         document.write("Original String: " + userInput + "<br>");
//         document.write("Longest Word: " + longestWord);
//     } else {
//         document.write("No input provided.");
//     }
// }

// findAndDisplayLongestWord();



// ? Q 13
// function countLetterOccurrences(inputString, letter) {
//     var count = 0;
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString[i] === letter) {
//             count++;
//         }
//     }
//     return count;
// }

// function countAndDisplayOccurrences() {
//     var userInput = prompt("Enter a string:");
//     var letterToCount = prompt("Enter a letter to count:");

//     if (userInput && letterToCount && letterToCount.length === 1) {
//         var occurrences = countLetterOccurrences(userInput, letterToCount);
//         document.write("String: " + userInput + "<br>");
//         document.write("Letter to count: " + letterToCount + "<br>");
//         document.write("Occurrences: " + occurrences);
//     } else {
//         document.write("Invalid input. Please provide a valid string and a single letter.");
//     }
// }


// countAndDisplayOccurrences();



// ? Q 14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     return "The circumference is " + circumference;
// }

// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     return "The area is " + area;
// }

// // Example usage:
// var radius = parseFloat(prompt("Enter the radius of the circle:"));

// if (!isNaN(radius) && radius >= 0) {
//     var circumferenceResult = calcCircumference(radius);
//     var areaResult = calcArea(radius);

//     document.write("Radius: " + radius + "<br>");
//     document.write(circumferenceResult + "<br>");
//     document.write(areaResult);
// } else {
//     document.write("Invalid input. Please enter a valid non-negative radius.");
// }




// todo                                    X X X X X X X X X
// SECTION 1 //
// 1. What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// DRY stands for "Don't Repeat Yourself". Paying attention to the DRY principle can lead to more efficient, readable, and maintainable code. Some programming tools that we have learned to write DRY code include functions, loops, and arrays.

// 2. What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// 'const' is used to declare a variable that cannot be reassigned once it is initialized. 'let' is used to declare a variable that can be reassigned. It has a block-level scope, meaning it is only accessible within the block it was declared in. 'var' is similar to 'let' in that it is used to declare a variable that can be reassigned, but it has a function-level scope instead of a block-level scope.

// SECTION 2 //

console.log(a < b);
console.log(c >= d);
console.log('Name' == 'Name');
console.log(a + b === c);
console.log(a * a !== d);
console.log(e != 'Kevin');
console.log(48 == '48');
console.log(f !== e);
let g = 0;
console.log(g);
g = b + c;
console.log(g);

// 1. Did you use const, let or var? Why did you choose the one you chose? 
// I used const to define the variables because they are not reassigned in the code. 

// 2. What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// If you don't use const, let or var to define a variable, it becomes a global variable if it's in the global scope or an implicit local variable if it's in a function. 

// 3. what happens if you write 10 = g?
// If you write 10 = g, you will get an error because the left-hand side of an assignment expression must be a variable.

// SECTION 3 //
// 1. Is the code below an infinite loop? Why or why not? 
while (true) {
	console.log('Do not run this loop');
}
// Yes, the code below is an infinite loop because the while loop condition is always true, so the loop will continue to run indefinitely without ever stopping.

// 2. is this loop an infinite loop? Why or why not?
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
// Yes, this loop is an infinite loop. This is because runProgram is initialized as true, and the loop continues to run as long as runProgram is truthy.

let letters = "A";
// The code will log the string "AAAAAAAAAAAAAAAAAAAA" to the console.
let i = 0;
// The variables letters and i are initialized to the string "A" and the number 0, respectively.

while (i < 20) {
    // A while loop is started with the condition that i must be less than 20. 
    // letters += "A"; appends the string "A" to the end of the letters variable.
    // i++; increments the value of i by 1.
    // The loop will continue to run until i is equal to 20, at which point it will terminate.
	letters += "A";
	i++;
}
// the string stored in letters ("A" plus 20 more "A"s) will be printed to the console using console.log()
console.log(letters);

// The code output was as expected, and it logged a string value of "AAAAAAAAAAAAAAAAAAAAA" to the console. 

// SECTION 4 //
// 1. A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities? 
// Differences: * The syntax of a 'for' loop is more compact than a while loop. * A 'for' loop is often used when iterating over arrays and objects, while a 'while' loop can be used for more general looping. 
// Similarities: * Both loops can be used for repetition. * Both loops can have an infinite loop if the condition is not properly set or updated. 

// What are the three components of the control panel? Each component is separated by a semicolon ;
// The first part of the control panel is the initialization of the loop counter variable. It sets the initial value of the counter variable before the loop starts;
// The second part of the control panel is the condition to continue looping. The loop will continue as long as the condition is true; 
// The third part of the control panel is the iteration of the counter variable. It changes the value of the counter variable after each iteration of the loop. 

// Write a for loop that will console.log the numbers 0 to 999. 
for (let i = 0; i < 1000; i++) {
    console.log(i);
  }

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (let i = 999; i >= 0; i--) {
    console.log(i);
  }

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.
// The loop should run from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log("The current value of i is: " + i);
  }




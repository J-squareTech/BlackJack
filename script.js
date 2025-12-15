/*
Learning Objectives
Arrays & objects
Booleans (true / false)
Conditional statements
Comparison operators
Logical operators
For loops and iterations
The Math object
Return statements
*/

/*

// Check if the person is elegible for a birthday card from the King! (100)

let age = 100 + 8

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one" 

if(age < 100) {
    console.log("Not elegible")
} else if(age === 100) {  // === means strickly equal to and for a fact, if we change the number and put string of "100", it will still function correctly while ignoring the "" colons
    console.log("Yeahh! You've got a Blackjack!")
} else {
    console.log("Not elegible, you've gotten one already")
}

*/


// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards
//document.getElementByID('card-el') = firstCard
let firstCard = 10
let secondCard = 8
let sum = firstCard + secondCard 
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 1. Declare a variable called message and assign its value to an empty string
// 2. Reassign the message variable to the string we're logging out
let message = ""

// 2. Store the sum paragraph in a variable called sumEl

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')

//let sumEl = document.querySelctor('#sum-el')  // This is an alternative for getElementById
//let cardEl = document.querySelector('#card-el')

// 2. Flip its value to false in the appropriate code block 

// 1. Create a button that says START GAME. 
// Make it call a startGame() function when clicked

function startGame(){

	if (sum <= 20) {     // JavaScript automatically converts our contitions and run them as booleans of either True / False
	message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
	message = "Yeahh! You've got a Blackjack! 🥳"
	hasBlackJack = true 
}else {
	message = "You're out of the game! 😭" 
	isAlive = false
}

messageEl.textContent =  message
sumEl.textContent = "Sum: " + sum   // renders ther sum-el
cardEl.textContent = "Cards: "+ firstCard +", "+ secondCard   // renders the card-el

}
// NEW CARD function
function newCard(){
	console.log("Wow !!! A new card again")
}


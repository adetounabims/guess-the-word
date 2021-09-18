//global variables selecting html elements
const ulList = document.querySelector("ul");
const button = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const wordRemaining = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message");
const replayButton = document.querySelector(".play-again");

//global variable to test the game
const word = "magnolia";
const guessedLetters = [];

//function to update the innertext of word-in-progress
const updateParagraph = function ( ) {
    const symbol = ["●", "●", "●", "●", "●", "●", "●", "●"];
    wordProgress.innerText = symbol.join( " ");
}
updateParagraph(word);

//event listener for when the guess button is clicked
button.addEventListener("click", function (e) {
    e.preventDefault();
    //empty message text
    message.innerText = "";
    //variable holding value of input
    const formInput = letterInput.value;
    //calling the form input
    console.log(formInput);
    //calling the variable containing function that validates input
    const guessInput = checkInput(formInput);
    
    if (guessInput) {
        makeGuess(formInput);
    }
    // emptying input value
    letterInput.value = "";
} );


//function validating player's input
const checkInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/; 
//if statement validating the input
if ( input.length === 0 ) {
    message.innerText = "Type in a letter";
} else if (input.length > 1) {
    message.innerText = "One letter at a time";
} else if (!input.match(acceptedLetter)) {
    message.innerText = "Enter a letter from A - Z";
} else {
    return input;
}

};

const makeGuess = function(formInput) {
    formInput = formInput.toUpperCase();
    if (guessedLetters.includes(formInput)) {
        message.innerText = "You've guessed that letter. Try again";
    } else {
        guessedLetters.push(formInput);
        console.log(guessedLetters);
    };
    
};
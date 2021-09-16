//global variables selecting html elements
const ulList = document.querySelector("ul");
const button = document.querySelector(".guess");
const input = document.querySelector(".letter");
const wordProgress = document.querySelector(".word-in-progress");
const wordRemaining = document.querySelector(".remaining");
const span = document.querySelector("span");
const emptyPara = document.querySelector(".message");
const replayButton = document.querySelector(".play-again");

//global variable to test the game
const word = "magnolia";

//function to update the innertext of word-in-progress
const updateParagraph = function ( ) {
    const symbol = ["●", "●", "●", "●", "●", "●", "●", "●"];
    wordProgress.innerText = symbol.join( " ");
}
updateParagraph(word);

//event listener for when the guess button is clicked
button.addEventListener("click", function(e){
    e.preventDefault();
    //variable holding value of input
    const formInput = input.value;
    console.log(formInput);
    clearInput();
} );

//function emptying value of input
const clearInput = function () {
    input.value = "";
  };

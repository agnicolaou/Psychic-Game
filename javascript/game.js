let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


let wins = 0;
let losses = 0;
let guessCount = 5;
let userGuessList = [];

let directionsText = document.getElementById("directions-text");
let userChoiceText = document.getElementById("userchoice-text");
let computerChoiceText = document.getElementById("computerchoice-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessCountText = document.getElementById("guesscount-text");

let playerName = prompt("Player name: ");
let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


document.onkeyup = function (event) {
    let userGuess = event.key;
    userGuessList.push(userGuess);



    if (userGuess === computerGuess) {
        wins++; 
        guessCount = 5;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    else if (userGuess !== computerGuess) {
        guessCount--; 
    }





    if (guessCount === 0) {
        losses++; 
        guessCount = 5;
        userGuessList = [];

    }

    if (wins >= 1) {
        alert("You win, " + playerName + " ");
        // playAgain();
        userGuessList = [];
    }

    if (losses >= 5) {
        alert("You lose, " + playerName + " ");
        // let confirm = playAgain();
    }





    userChoiceText.textContent = "You chose: " + userGuessList;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessCountText.textContent = "Remaining Guesses: " + guessCount;


};




// let playAgain = function () {
//     var confirm = confirm("Play again?")
//     return confirm;
// }



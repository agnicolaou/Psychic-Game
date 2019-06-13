let computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let wins = 0;
let losses = 0;
let guessCount = 5;

let directionsText = document.getElementById("directions-text");
let userChoiceText = document.getElementById("userchoice-text");
let computerChoiceText = document.getElementById("computerchoice-text");
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessCountText = document.getElementById("guesscount-text");

let playerName = prompt("Player name: ");

document.onkeyup = function(event){
let userGuess = event.key;




let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



if (userGuess === computerGuess){
    wins++; guessCount = 5;
} 

else if (userGuess !== computerGuess){
    guessCount--;
}
    

if (guessCount === 0){
    losses++; guessCount = 5;
}

if (wins >= 1){
    alert("You win " + playerName + " ");
    playAgain();
}

if (losses >= 5){
    alert("You lose " + playerName + " ");
    playAgain();
}



// if (losses >= 5){
//         gameOver();
//         playAgain(); 
// }

// if (playAgain){
//     wins = 0; losses = 0; guessCount = 0;
// }

// // else {
// //     alert("Goodbye");
// // }


        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        guessCountText.textContent = "Remaining Guesses: " + guessCount;
        
      
    };




    let playAgain = function(){
        confirm("Play again?")
    }

// Need playAgain OK to reset wins/losses = 0 and guessCount = 5
// Need losses or wins to show 5 when alert appears
// Need list of user guesses to show (5 letters)
// Convert user keys to lowercase

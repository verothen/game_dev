//Math.random() generates a random decimal [0,1)
//Math.random()*20 scales the random decimal [0,19]
//Math.floor rounds down decimal to an integer
//+1 changes the range from [0,19] to [1,20]
const myGuess = Math.floor(Math.random()*20)+1;
let guesses = 0;
let guess;
while (guess !== myGuess) {
    guess = parseInt(prompt("What number am I thinking of?"),10);
    guesses++;
    if (guess < myGuess){
        alert("Higher.");
    }else if (guess>myGuess){
        alert("Lower.");
    }
}

alert(`Well done! You got it in ${guesses}!`);
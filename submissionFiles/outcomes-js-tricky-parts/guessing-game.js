function guessingGame() {
    let guesses = 1;

    function game(num){
        const randomNum = Math.floor(Math.random() * 100)

        if (num === randomNum) {
            return `You win, you found ${randomNum} in ${guesses} guesses`
        }

        if (num < randomNum) {
            guesses += 1;
            return `${num} is too low! Guess higher`
        }

        if (num > randomNum) {
            guesses += 1;
            return `${num} is too high! Guess lower`
        }
        
    }

    return game;
}


let guess = guessingGame();
console.log(guess(40))
console.log(guess(50))
console.log(guess(60))
console.log(guess(70))
console.log(guess(80))
console.log(guess(55))
console.log(guess(90))


module.exports = { guessingGame };

console.log("--- Page 1 ---");


const correctWord = 'free';

let userGuess = prompt('Raad het woord');

while (userGuess != correctWord) {
    if(userGuess === 'stop'){
        break;
    }
    userGuess = prompt('Raad het woord');
}
alert('Goed geraden!');
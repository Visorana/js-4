import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const guessNumber = async() => {
    var num = Math.floor(Math.random() * 100);
    console.log('Correct number:', num);
    var tries = 1;
    while (true) {
      var answer = await rl.question('Guess a number between 1 and 100: ');
      if (+answer === num) {
        console.log('Correct! Number of tries:', tries);
        break;
      } else if (answer > num) {
        console.log('Too high. Number of try: ', tries);
      } else if(answer < num) {
        console.log('Too low. Number of try: ', tries);
      } else {
        console.log('Try again. Number of try: ', tries);
      }
      tries += 1;
  }
}

guessNumber()
import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';
import fs from 'node:fs'

const rl = readline.createInterface({ input, output });

var num = Math.floor(Math.random() * 100);
console.log('Correct number:', num);
var tries = 1;

var data = 'Correct number: ' + num 
fs.writeFile("guessnumber.txt", data, (err) => {
    if (err) {
        console.log(err);
    }
    else {
      console.log("\ninfo: File updated successfully");
    }
});

rl.setPrompt('Guess a number between 1 and 100: ');
rl.prompt();
rl.on('line', (answer) => {
    if (+answer === num) {
        console.log('Correct! Number of tries:', tries);
        data = '\nEnd of the game. Entered number: ' + answer + '. Number of tries: ' + tries
        fs.appendFile('guessnumber.txt', data, (err) => {
            if (err) {
                console.log(err);
            } 
            else {
                console.log("\ninfo: File updated successfully");
            }
        });
        rl.close();
        return
    } else if (answer > num) {
        console.log('Too high. Number of try: ', tries);
    } else if(answer < num) {
        console.log('Too low. Number of try: ', tries);
    } else {
        console.log('Try again. Number of try: ', tries);
    }
    tries += 1;
    rl.prompt()
    data = '\nEntered number: ' + answer + '. Number of try: ' + tries
    fs.appendFile('guessnumber.txt', data, (err) => {
        if (err) {
            console.log(err);
        } 
        else {
            console.log("\ninfo: File updated successfully");
        }
    });
})

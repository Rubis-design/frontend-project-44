import greeting from '../cli.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const brainEvenGame = () => {
    const name = greeting();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const roundsToWin = 3;

    for (let round = 1; round <= roundsToWin; round += 1) {
        const randomNumber = getRandomNumber(1, 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ').toLocaleLowerCase();

        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default brainEvenGame;
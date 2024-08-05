import { getRandomNumber } from '../utils/getRandomNumber.js';
import { runGame } from '../utils/makeLogicGame.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
    const randomNumber = getRandomNumber(1, 100);
    const question = `${randomNumber}`;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    return { question, correctAnswer };
  };

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const brainEvenGame = runGame(description, generateRound);

export {brainEvenGame};
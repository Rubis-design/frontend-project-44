import { runGame } from '../utils/makeLogicGame.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';

const calculateGCD = (num1, num2) => {
  while (num2) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(num1, num2).toString();

  return { question, correctAnswer };
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGcdGame = () => runGame(description, generateRound);

export { brainGcdGame };

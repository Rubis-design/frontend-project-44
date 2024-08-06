import { runGame } from '../utils/makeLogicGame.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const generateRound = () => {
    const number = getRandomNumber(1, 100);
    const question = `${number}`;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { question, correctAnswer };
  };

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrimeGame = () => runGame(description, generateRound);

export { brainPrimeGame };
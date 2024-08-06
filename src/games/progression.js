import { runGame } from '../utils/makeLogicGame.js'
import { getRandomNumber } from '../utils/getRandomNumber.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const progression = generateProgression(start, step, progressionLength);

  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';

  const question = progression.join(' ');

  return { question, correctAnswer };
};

const description = 'What number is missing in the progression?';

const brainProgressionGame = () => runGame(description, generateRound);

export { brainProgressionGame };

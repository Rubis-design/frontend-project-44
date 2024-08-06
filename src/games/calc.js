import { runGame } from '../utils/makeLogicGame.js';
import { getRandomNumber } from '../utils/getRandomNumber.js'


const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, operators.length - 1);
  return operators[randomIndex];
};

const calculateExpression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculateExpression(num1, num2, operator).toString();

  return { question, correctAnswer };
};

const description = 'What is the result of the expression?';
const brainCalcGame = () => runGame(description, generateRound);

export {brainCalcGame};
#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';

const doesRandomNumberIsEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const main = () => {
  let i = 0;
  let result;
  let randomNumber;
  let userAnswer;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    randomNumber = Math.floor(100 * Math.random());
    console.log(`${'Question: '}${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');

    result = doesRandomNumberIsEven(randomNumber);
    if (result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      i = 0;
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};

main();

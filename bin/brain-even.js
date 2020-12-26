#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import readlineSync from 'readline-sync';
import letsPlay from '../src/cli.js';

let i = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (i < 3) {
  let result;
  const randomNumber = Math.floor(100 * Math.random());
  console.log(`${'Question: '}${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const doesRandomNumberIsEven = (number) => { // understand what random number we have
    if (number % 2 === 0) {
      result = 'yes';
    }
    if (number % 2 !== 0) {
      result = 'no';
    }
    return result;
  };
  doesRandomNumberIsEven(randomNumber); // evenNumber - yes, notEvenNumber - no
  switch (userAnswer) {
    case result:
      console.log('Correct!');
      break;
    default:
      console.log(`\'${userAnswer}\' is wrong answer ;(. Correct answer was \'${result}\'.\nLet's try again, ${letsPlay}!`);
  }
  if (result === userAnswer) {
    i += 1;
  }
  if (result !== userAnswer) {
    i = 0;
  }
  if (i === 3) {
    console.log(`Congratulations, ${letsPlay}!`);
  }
}

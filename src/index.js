import readlineSync from 'readline-sync';

const roundsCount = 3;

const play = (game, gameDescription) => {
  let i = 0;
  let values;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  while (i < roundsCount) {
    values = game(); // { result, question }
    console.log(`Question: ${values.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (values.answer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${values.answer}'.\nLet's try again, ${name}!`);
      break;
    }
  }

  if (i === roundsCount) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default play;

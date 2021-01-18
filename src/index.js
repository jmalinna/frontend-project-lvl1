import readlineSync from 'readline-sync';

const play = (game, description) => {
  let i = 0;
  const rounds = 3;
  let values;
  let userAnswer;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  while (i < rounds) {
    values = game(); // { result, question }
    console.log(values.question);
    const answer = readlineSync.question('Your answer: ');

    if (typeof values.result === 'number') {
      userAnswer = Number(answer);
    } else {
      userAnswer = answer;
    }
    if (values.result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${values.result}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === rounds) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default play;

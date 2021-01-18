import readlineSync from 'readline-sync';

const play = (game, description) => {
  let i = 0;
  let result;
  let userAnswer;
  const rounds = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  while (i < rounds) {
    result = game(); // { result, question }
    console.log(result.question);
    const answer = readlineSync.question('Your answer: ');

    if (typeof result.result === 'number') {
      userAnswer = Number(answer);
    } else {
      userAnswer = answer;
    }
    if (result.result === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${result.result}'.\nLet's try again, ${name}!`);
      break;
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default play;

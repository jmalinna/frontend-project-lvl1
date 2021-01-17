import readlineSync from 'readline-sync';

const play = (game, question) => {
  let i = 0;
  let result;
  let userAnswer;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  while (i < 3) {
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

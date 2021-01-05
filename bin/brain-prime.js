#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import play from '../src/index.js';
import playBrainPrime from '../src/games/brain-prime.js';

play(playBrainPrime, { question: 'Answer "yes" if given number is prime. Otherwise answer "no".' });

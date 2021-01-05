#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import play from '../src/index.js';
import playBrainGcd from '../src/games/brain-gcd.js';

play(playBrainGcd, { question: 'Find the greatest common divisor of given numbers.' });

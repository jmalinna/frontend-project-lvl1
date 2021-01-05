#!/usr/bin/env node
/* eslint-disable import/extensions */
import play from '../src/index.js';
import playBrainCalc from '../src/games/brain-calc.js';

play(playBrainCalc, { question: 'What is the result of the expression?' });

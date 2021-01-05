#!/usr/bin/env node
/* eslint-disable import/extensions */
import play from '../src/index.js';
import playBrainEven from '../src/games/brain-even.js';

play(playBrainEven, { question: 'Answer "yes" if the number is even, otherwise answer "no".' });

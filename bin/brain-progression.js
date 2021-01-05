#!/usr/bin/env node
/* eslint-disable no-useless-escape */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import play from '../src/index.js';
import playBrainProgression from '../src/games/brain-progression.js';

play(playBrainProgression, { question: 'What number is missing in the progression?' });

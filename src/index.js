import './style.css';

import { getScores, setScore } from './api.js';
import renderList from './render.js';

const refreshBtn = document.querySelector('.refresh button');
const form = document.querySelector('form');

refreshBtn.addEventListener('click', async () => {
  const list = await getScores();

  renderList(list);
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const score = {
    user: form.elements.username.value.trim(),
    score: form.elements.score.value.trim(),
  };

  form.reset();

  await setScore(score);
});

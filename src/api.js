const url =
  'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/c3bjRSVNPwLd72pipnVZ/scores';

const setScore = async (score) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });

  const { result } = await response.json();

  return result;
};

const getScores = async () => {
  const response = await fetch(url);

  const { result } = await response.json();

  return result;
};

export { getScores, setScore };

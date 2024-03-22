const displayScore: (rawScore: number) => string = (rawScore: number) => {
  let score = Math.round(rawScore * 100) / 100;

  return score.toString();
};

export default displayScore;

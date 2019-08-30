export default () => {
  const score = document.getElementById('score');
  const value = parseInt(score.textContent, 10);
  if (value >= 870) {
    return 20;
  }
  return 150 - (value * 0.15);
};

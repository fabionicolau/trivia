export const getRanking = () => {
  const storagedRanking = localStorage.getItem('ranking');
  return JSON.parse(storagedRanking) || [];
};

export const saveRaking = (newRanking) => {
  const storagedRanking = getRanking() || [];
  const modifiedRaking = [...storagedRanking, newRanking];
  localStorage.setItem('ranking', JSON.stringify(modifiedRaking));
};

export const fetchToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return data.token;
};

export const fetchQuestion = async (amount, token) => {
  const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&token=${token}`);
  const data = await response.json();
  return data;
};

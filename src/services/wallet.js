export const generateWallet = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/generate-wallet');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const getBalanceOfWallet = async (address) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/balance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: address }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const createTransaction = async (from, to, amount, privateKey) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/send-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        amount,
        privateKey,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const getAllTransactions = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/all-pending-transactions');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const getTransactionsByAddress = async (address) => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/transactions-by-address', {
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

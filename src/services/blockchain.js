export const getChain = async () => {
  try {
    const response = await fetch(process.env.REACT_APP_API_URL + '/chain');
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const updateChain = async () => {
  try {
    await fetch(process.env.REACT_APP_API_URL + '/replace-chain');
    return await getChain();
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

export const mineBlock = async (address) => {
  console.log('address: ', address);
  try {
    const result = await fetch(process.env.REACT_APP_API_URL + '/mine', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ address: address }),
    });
    return await result.json();
  } catch (error) {
    console.log('Fetch error:', error);
    return error;
  }
};

import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Stack, TextField, Button, Typography } from '@mui/material';

import TransactionContext from '../../../../contexts/transactionContext';

function CreateTransactionPage() {
  const navigate = useNavigate();

  const { setPendingTransactions } = useContext(TransactionContext);

  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [amount, setAmount] = useState();

  const [loading, setLoading] = useState(false);

  const handleCreateTransaction = () => {
    setLoading(true);
    const newTransaction = {
      id: 1,
      from: fromAddress,
      to: toAddress,
      amount: amount,
      timestamp: 1456002322,
      isValid: true,
    };
    setPendingTransactions((prevPendingTransactions) => {
      const newPendingTransactions = [...prevPendingTransactions];
      newPendingTransactions.push(newTransaction);
      setPendingTransactions(newPendingTransactions);
    });
    navigate('/transaction/pending');
    setLoading(false);
  };

  const handleCancelTransaction = () => {
    navigate('/');
  };

  const handleFromAddressChange = (e) => {
    setFromAddress(e.target.value);
  };

  const handleToAddressChange = (e) => {
    setToAddress(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Create Transaction</Typography>
        <Typography variant="body1">Transfer some money to someone</Typography>
      </Stack>
      <TextField
        name="from"
        label="From Address"
        value={fromAddress}
        variant="outlined"
        onChange={handleFromAddressChange}
        helperText="This is your wallet address. You cannot change it because you can only spend your own coins."
      />
      <TextField
        name="to"
        label="To Address"
        value={toAddress}
        variant="outlined"
        onChange={handleToAddressChange}
        helperText="The address of the wallet where you want to send the money to. You can type random text here (if you are not interested in recovering the funds)."
      />
      <TextField
        name="amount"
        label="Amount"
        value={amount}
        onChange={handleAmountChange}
        variant="outlined"
        type="number"
        helperText="You can transfer any amount. Account balance is not checked in this demo. Have at it!"
      />
      <TextField
        name="privateKey"
        label="Private Key"
        value={toAddress}
        variant="outlined"
        onChange={handleToAddressChange}
        helperText="The private key of the wallet, used for validating the transaction."
      />
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" onClick={handleCancelTransaction}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleCreateTransaction}
          disabled={loading}
          variant="contained"
        >
          {loading ? 'Creating' : 'Sign and Create Transaction'}
        </Button>
      </Stack>
    </Stack>
  );
}

export default CreateTransactionPage;

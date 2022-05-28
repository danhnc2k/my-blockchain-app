import { useContext, useState } from 'react';
import { Typography, Stack, Button } from '@mui/material';

import TransactionTable from '../../../../components/TransactionTable';

import TransactionContext from '../../../../contexts/transactionContext';
import { useNavigate } from 'react-router-dom';

function PendingTransactionPage() {
  const navigate = useNavigate();
  const { pendingTransactions } = useContext(TransactionContext);
  console.log('pending transactions: ', pendingTransactions);

  const [loading, setLoading] = useState(false);

  const handleMineTransaction = () => {
    setLoading(true);
    // fetch API to mine transactions
    setLoading(false);
  };

  const handleCancelMineTransaction = () => {
    navigate('/');
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={10}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Pending Transaction</Typography>
        <Typography variant="body1">
          These transactions are waiting to be included in the next block. Next block is created
          when you 3 start the mining process.
        </Typography>
      </Stack>
      <TransactionTable data={pendingTransactions} />
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" onClick={handleCancelMineTransaction}>
          Cancel
        </Button>
        <Button
          color="primary"
          onClick={handleMineTransaction}
          disabled={loading}
          variant="contained"
        >
          {loading ? 'Mining' : 'Mine all transactions'}
        </Button>
      </Stack>
    </Stack>
  );
}

export default PendingTransactionPage;

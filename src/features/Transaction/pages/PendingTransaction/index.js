import { useContext, useEffect, useState } from 'react';
import { Typography, Stack, Button, TextField } from '@mui/material';

import TransactionTable from '../../../../components/TransactionTable';

import TransactionContext from '../../../../contexts/transaction';
import { useNavigate } from 'react-router-dom';
import { getAllTransactions } from '../../../../services/transaction';
import { mineBlock } from '../../../../services/blockchain';

function PendingTransactionPage() {
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState('');
  const { pendingTransactions, setPendingTransactions } = useContext(TransactionContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPendingTransactions = async () => {
      const result = await getAllTransactions();
      setPendingTransactions(result);
    };
    loadPendingTransactions();
  }, []);

  const handleMineTransaction = async () => {
    setLoading(true);
    await mineBlock(publicKey);
    const result = await getAllTransactions();
    setPendingTransactions(result);
    setLoading(false);
    navigate('/');
  };

  const handlePublicKeyChange = (e) => {
    setPublicKey(e.target.value);
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={10}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Pending Transaction</Typography>
        <Typography variant="body1">
          These transactions are waiting to be included in the next block. Next block is created
          when you start the mining process.
        </Typography>
      </Stack>
      <TransactionTable data={pendingTransactions} />
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <TextField
          name="publicKey"
          label="Wallet Address (Public Key)"
          value={publicKey}
          variant="outlined"
          onChange={handlePublicKeyChange}
          sx={{ flexGrow: 1 }}
        />
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

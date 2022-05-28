import { AppBar, Typography, Stack, Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TransactionContext from '../../contexts/transactionContext';

function Header() {
  const navigate = useNavigate();
  const { pendingTransactions } = useContext(TransactionContext);

  const handleHomeButton = () => {
    navigate('/');
  };

  const handleCreateTransaction = () => {
    navigate('/transaction/create');
  };

  const handlePendingTransaction = () => {
    navigate('/transaction/pending');
  };

  return (
    <AppBar
      sx={{
        p: '20px',
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={10}>
        <Typography sx={{ marginY: 'auto', cursor: 'pointer' }} onClick={handleHomeButton}>
          MY BLOCKCHAIN APP
        </Typography>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          {pendingTransactions.length > 0 && (
            <Button
              sx={{ color: 'white', borderColor: 'white' }}
              variant="outlined"
              onClick={handlePendingTransaction}
            >
              Pending Transactions {`(${pendingTransactions.length})`}
            </Button>
          )}
          <Button
            sx={{ color: 'white', borderColor: 'white' }}
            variant="outlined"
            onClick={handleCreateTransaction}
          >
            Create Transaction
          </Button>
        </Stack>
      </Stack>
    </AppBar>
  );
}

export default Header;

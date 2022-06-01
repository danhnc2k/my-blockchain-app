import { Stack, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionTable from '../../../../components/TransactionTable';
import { getTransactionsByAddress } from '../../../../services/transaction';
import { getBalanceOfWallet } from '../../../../services/wallet';

function WalletDetail() {
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState('');
  const [walletDetail, setWalletDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getWalletDetail = async () => {
    setLoading(true);
    const { balance } = await getBalanceOfWallet(publicKey);
    const transactions = await getTransactionsByAddress(publicKey);
    console.log('balance, trans', balance, transactions);
    const wallet = {
      address: publicKey,
      balance: balance,
      transactions: transactions,
    };
    setWalletDetail(wallet);
    setLoading(false);
  };

  const handleCancelTransaction = () => {
    navigate('/');
  };

  const handlePublicKeyChange = (e) => {
    setPublicKey(e.target.value);
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Wallet Detail</Typography>
        <Typography variant="body1">
          View wallet detail by enter the public key of wallet.
        </Typography>
      </Stack>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <TextField
          name="publicKey"
          label="Public Key"
          value={publicKey}
          variant="outlined"
          onChange={handlePublicKeyChange}
          helperText="This is your public key of wallet you want to view detail."
        />
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button variant="outlined" onClick={handleCancelTransaction}>
            Cancel
          </Button>
          <Button color="primary" onClick={getWalletDetail} disabled={loading} variant="contained">
            {loading ? 'Loading' : 'View Wallet Detail'}
          </Button>
        </Stack>
      </Stack>
      {walletDetail && walletDetail.address && (
        <Stack direction="column" justifyContent="flex-start" spacing={3}>
          <Typography variant="h5">Address:</Typography>
          <Typography variant="body1">{walletDetail.address}</Typography>
          <Typography variant="h5">Balance:</Typography>
          <Typography variant="body1">{walletDetail.balance}</Typography>
          <Typography variant="h5">Transaction History:</Typography>
          <TransactionTable data={walletDetail.transactions} />
        </Stack>
      )}
    </Stack>
  );
}

export default WalletDetail;

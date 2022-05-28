import { Stack, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import TransactionTable from '../../../../components/TransactionTable';

function WalletDetail() {
  const [publicKey, setPublicKey] = useState('');
  const [walletDetail, setWalletDetail] = useState();
  const [loading, setLoading] = useState(false);

  const getWalletDetail = () => {
    const wallet = {
      address: '0x132wer3432423',
      balance: 1234,
      transactions: [
        {
          id: 0,
          from: '0x123456789werw01232342',
          to: '0x123456ewwerw78122901ph',
          amount: 123,
          timestamp: 1456002322,
          isValid: true,
        },
        {
          id: 1,
          from: '0x123456789werw01232342',
          to: '0x123456ewwerw78122901ph',
          amount: 123,
          timestamp: 1456002322,
          isValid: true,
        },
      ],
    };
    setWalletDetail(wallet);
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
        <Button color="primary" onClick={getWalletDetail} disabled={loading} variant="contained">
          {loading ? 'Loading' : 'View Wallet Detail'}
        </Button>
      </Stack>
      {walletDetail && walletDetail.address && (
        <Stack direction="column" justifyContent="flex-start" spacing={3}>
          <Typography variant="h5">Address:</Typography>
          <Typography variant="body1">{walletDetail.address}</Typography>
          <Typography variant="h5">Balance:</Typography>
          <Typography variant="body1">{walletDetail.balance}</Typography>
          <TransactionTable data={walletDetail.transactions} />
        </Stack>
      )}
    </Stack>
  );
}

export default WalletDetail;

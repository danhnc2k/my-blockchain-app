import { Stack, Typography, Divider, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateWallet } from '../../../../services/wallet';

function GenerateWallet() {
  const navigate = useNavigate();
  const [wallet, setWallet] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateNewWallet();
  }, []);

  const generateNewWallet = async () => {
    setLoading(true);
    const result = await generateWallet();
    const newWallet = {
      privateKey: result.privateKey,
      publicKey: result.publicKey,
    };
    setWallet(newWallet);
    setLoading(false);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Generate Wallet</Typography>
        <Typography variant="body1">
          Generate new wallet to use for sending transaction in blockchain
        </Typography>
      </Stack>
      <Typography marginTop={2} marginBottom={1}>
        Public Key
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }} variant="body1" marginBottom={1}>
        {wallet?.publicKey}
      </Typography>
      <Divider />
      <Typography marginTop={2} marginBottom={1}>
        Private Key
      </Typography>
      <Typography sx={{ fontWeight: 'bold' }} variant="body1" marginBottom={1}>
        {wallet?.privateKey}
      </Typography>
      <Divider />
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="primary" onClick={generateNewWallet} disabled={loading} variant="contained">
          {loading ? 'Generating' : 'Generate new wallet'}
        </Button>
      </Stack>
    </Stack>
  );
}

export default GenerateWallet;

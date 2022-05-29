import { useState } from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';
import { mineBlock } from '../../../../services/blockchain';
import { useNavigate } from 'react-router-dom';

function MineBlock() {
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMineBlock = async () => {
    setLoading(true);
    const result = await mineBlock(publicKey);
    console.log('mine block res: ', result);
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
        <Typography variant="h4">Mine New Block</Typography>
        <Typography variant="body1">Mining new block and give miner some token reward</Typography>
      </Stack>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <TextField
          name="publicKey"
          label="Wallet Address (Public Key)"
          value={publicKey}
          variant="outlined"
          onChange={handlePublicKeyChange}
          helperText="This is the wallet address (public key) of the miner for receiving some token reward."
        />
        <Stack direction="row" justifyContent="flex-end" spacing={2}>
          <Button variant="outlined" onClick={handleCancelTransaction}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleMineBlock} disabled={loading} variant="contained">
            {loading ? 'Mining' : 'Mine New Block'}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MineBlock;

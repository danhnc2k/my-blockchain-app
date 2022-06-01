import { useState } from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';
import { mineBlock } from '../../../../services/blockchain';
import { useNavigate } from 'react-router-dom';

function MineBlock() {
  const navigate = useNavigate();
  const [publicKey, setPublicKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [blockState, setBlockState] = useState('');

  const handleMineBlock = async () => {
    setLoading(true);
    const result = await mineBlock(publicKey);
    console.log('mine block res: ', result);
    if (result.hash) {
      setBlockState('successfully');
    } else {
      setBlockState('failed');
    }
    setLoading(false);
  };

  const handleCancelTransaction = () => {
    navigate('/');
  };

  const handlePublicKeyChange = (e) => {
    setPublicKey(e.target.value);
  };

  const handleContinueToMineBlock = () => {
    setBlockState('');
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Mine New Block</Typography>
        <Typography variant="body1">Mining new block and give miner some token reward</Typography>
      </Stack>
      {blockState ? (
        <Stack direction="column" justifyContent="flex-start" spacing={2}>
          <Typography
            color={blockState === 'successfully' ? 'green' : 'red'}
          >{`Mine block ${blockState} !`}</Typography>

          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <Button variant="outlined" onClick={handleCancelTransaction}>
              Cancel
            </Button>
            <Button color="primary" onClick={handleContinueToMineBlock} variant="contained">
              Continue To Mine New Block
            </Button>
          </Stack>
        </Stack>
      ) : (
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
            <Button
              color="primary"
              onClick={handleMineBlock}
              disabled={loading}
              variant="contained"
            >
              {loading ? 'Mining' : 'Mine New Block'}
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}

export default MineBlock;

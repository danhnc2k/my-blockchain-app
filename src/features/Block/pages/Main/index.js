import { Typography, Stack, Button } from '@mui/material';

import BlockList from '../../components/BlockList';
import TransactionTable from '../../../../components/TransactionTable';

import { useEffect, useState } from 'react';
import { getChain, updateChain } from '../../../../services/blockchain';

function MainPage() {
  const [blockList, setBlockList] = useState([]);
  const [selectedBlockId, setSelectedBlockId] = useState('');
  const [transactionList, setTransactionList] = useState([]);

  // run once to load blockchain list
  useEffect(() => {
    const loadChain = async () => {
      const result = await getChain();
      setBlockList(result);
    };
    loadChain();
  }, []);

  useEffect(() => {
    const length = blockList.length;
    if (length) {
      const latestBlockId = length - 1;
      updateTransactionList(latestBlockId);
    }
  }, [blockList]);

  const updateTransactionList = (blockId) => {
    setSelectedBlockId(blockId);
    setTransactionList(blockList[blockId].transactions);
  };

  const handleReloadTransactions = async () => {
    const result = await updateChain();
    setBlockList(result);
  };

  return (
    <Stack direction="column" justifyContent="flex-start" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Typography variant="h4">Blocks on chain</Typography>
          <Button variant="contained" onClick={handleReloadTransactions}>
            Reload Chain
          </Button>
        </Stack>
        <Typography variant="body1">
          Each card represents a block on the chain. Click on a block to see the transactions stored
          inside.
        </Typography>
      </Stack>
      <BlockList data={blockList} handleShowTransactions={updateTransactionList} />
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Transactions inside Block {selectedBlockId}</Typography>
        <TransactionTable data={transactionList} />
      </Stack>
    </Stack>
  );
}

export default MainPage;

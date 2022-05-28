import { Typography, Stack } from '@mui/material';

import BlockList from '../../components/BlockList';
import TransactionTable from '../../components/TransactionTable';

import * as Dummy from '../../../../utils/dummyData';
import { useEffect, useState } from 'react';

function MainPage() {
  const [blockList, setBlockList] = useState([]);
  const [selectedBlockId, setSelectedBlockId] = useState('');
  const [transactionList, setTransactionList] = useState([]);

  useEffect(() => {
    // fetch data to get block list
    setTimeout(() => {
      setBlockList(Dummy.DUMMY_BLOCK_LIST);
    }, 300);
  }, []);

  useEffect(() => {
    const length = blockList.length;
    if (length) {
      const latestBlockId = blockList[length - 1].id;
      updateTransactionList(latestBlockId);
    }
  }, [blockList]);

  const updateTransactionList = (blockId) => {
    //fetch data to get transactions in block has id == blockId
    setTimeout(() => {
      setSelectedBlockId(blockId);
      setTransactionList(Dummy.DUMMY_TRANSACTION_LIST);
      console.log('show transactions: ', blockId);
    }, 300);
  };

  return (
    <Stack direction="column" justifyContent="flex-start" spacing={5}>
      <Stack direction="column" justifyContent="flex-start" spacing={2}>
        <Typography variant="h4">Blocks on chain</Typography>
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

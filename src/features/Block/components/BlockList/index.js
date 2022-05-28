import { Stack } from '@mui/material';
import BlockCard from '../BlockCard';

function BlockList(props) {
  const { data, handleShowTransactions } = props;
  return (
    <Stack
      sx={{ maxRow: '100%', overflow: 'auto' }}
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      {data?.map((block, index) => (
        <BlockCard
          key={index}
          data={block}
          handleShowTransactions={() => handleShowTransactions(block.id)}
        />
      ))}
    </Stack>
  );
}

export default BlockList;

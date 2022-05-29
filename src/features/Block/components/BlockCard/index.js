import { Card, CardContent, CardActions, Button, Typography, Divider } from '@mui/material';

import { convertTimestampToDateTime } from '../../../../utils/time';

function BlockCard(props) {
  const { id, hash, previousHash, nonce, timestamp } = props.data;

  return (
    <Card sx={{ minWidth: 275, border: 1, borderColor: 'grey.300' }}>
      <CardContent>
        <Typography variant="h5" color="text.primary" gutterBottom>
          Block {id}
        </Typography>
        <Divider />
        <Typography variant="body1" marginTop={2} marginBottom={1}>
          Hash
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', maxWidth: 250 }}
          textOverflow="ellipsis"
          overflow="hidden"
          marginBottom={1}
        >
          {hash}
        </Typography>
        <Divider />
        <Typography marginTop={2} marginBottom={1}>
          Hash of previous block
        </Typography>
        <Typography
          sx={{ fontWeight: 'bold', maxWidth: 250 }}
          textOverflow="ellipsis"
          overflow="hidden"
          variant="body1"
          marginBottom={1}
        >
          {previousHash}
        </Typography>
        <Divider />
        <Typography variant="body2" marginTop={2} marginBottom={1}>
          Nonce
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant="body1" marginBottom={1}>
          {nonce}
        </Typography>
        <Divider />
        <Typography variant="body2" marginTop={2} marginBottom={1}>
          Timestamp
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant="body1" marginBottom={1}>
          {timestamp}
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} variant="body1" marginBottom={1}>
          {convertTimestampToDateTime(timestamp)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.handleShowTransactions}>
          Show Transactions
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlockCard;

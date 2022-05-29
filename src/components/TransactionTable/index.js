import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from '@mui/material';

import { convertTimestampToDateTime } from '../../utils/time';

function TransactionTable(props) {
  const { data } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                Index
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                From
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                To
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                Amount
              </Typography>
            </TableCell>
            <TableCell>
              <Typography sx={{ fontWeight: 'bold' }} variant="body1">
                Time
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!data?.length ? (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>No transaction</TableCell>
            </TableRow>
          ) : (
            data.map((transaction, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Typography>{index}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ maxWidth: 200 }} textOverflow="ellipsis" overflow="hidden">
                    {transaction.fromAddress}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography sx={{ maxWidth: 200 }} textOverflow="ellipsis" overflow="hidden">
                    {transaction.toAddress}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{transaction.amount}</Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography>{convertTimestampToDateTime(transaction.timestamp)}</Typography>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable;

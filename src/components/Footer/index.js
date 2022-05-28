import { Stack, Typography } from '@mui/material';

function Footer(props) {
  return (
    <Stack
      sx={{ mt: 'auto', p: '20px', bgcolor: '#b3e5fc' }}
      direction="row"
      justifyContent="space-between"
    >
      <Typography>A simple blockchain</Typography>
      <Typography>
        UI built on{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          ReactJS
        </a>
        ,{' '}
        <a href="https://mui.com/" target="_blank" rel="noreferrer">
          Material UI
        </a>
      </Typography>
    </Stack>
  );
}

export default Footer;

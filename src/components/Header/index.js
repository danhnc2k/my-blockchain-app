import { AppBar, Typography, Stack, Button } from '@mui/material';

function Header() {
  const handleCreateTransaction = (e) => {};

  return (
    <AppBar
      sx={{
        p: '20px',
      }}
    >
      <Stack direction="row" justifyContent="space-between" spacing={10}>
        <Typography sx={{ my: 'auto' }}>MY BLOCKCHAIN APP</Typography>
        <Button variant="outline" onClick={handleCreateTransaction}>
          Create Transaction
        </Button>
      </Stack>
    </AppBar>
  );
}

export default Header;

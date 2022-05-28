import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { TransactionProvider } from './contexts/transactionContext';
import { WalletProvider } from './contexts/walletContext';

import Header from './components/Header';
import Footer from './components/Footer';

import Block from './features/Block';
import Transaction from './features/Transaction';

import './App.css';

function App() {
  return (
    <WalletProvider>
      <TransactionProvider>
        <BrowserRouter>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
            <Header />
            <Container
              sx={{
                height: '100%',
                py: '6%',
              }}
            >
              <Routes>
                <Route path="/*" element={<Block />} />
                <Route path="/transaction/*" element={<Transaction />} />
              </Routes>
            </Container>
            <Footer />
          </Box>
        </BrowserRouter>
      </TransactionProvider>
    </WalletProvider>
  );
}

export default App;

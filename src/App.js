import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

import { TransactionProvider } from './contexts/transaction';

import Header from './components/Header';
import Footer from './components/Footer';

import Block from './features/Block';
import Transaction from './features/Transaction';
import Wallet from './features/Wallet';

import './App.css';

function App() {
  return (
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
              <Route path="/wallet/*" element={<Wallet />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </BrowserRouter>
    </TransactionProvider>
  );
}

export default App;

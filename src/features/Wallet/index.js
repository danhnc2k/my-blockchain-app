import { Routes, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';

import GenerateWalletPage from './pages/GenerateWallet';
import WalletDetailPage from './pages/WalletDetail';

function Wallet() {
  return (
    <Routes>
      <Route path="generate" element={<GenerateWalletPage />} />
      <Route path="detail" element={<WalletDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Wallet;

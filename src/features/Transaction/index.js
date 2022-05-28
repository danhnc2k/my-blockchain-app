import { Routes, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';

import CreateTransactionPage from './pages/CreateTransaction';
import PendingTransactionPage from './pages/PendingTransaction';

function Transaction() {
  return (
    <Routes>
      <Route path="create" element={<CreateTransactionPage />} />
      <Route path="pending" element={<PendingTransactionPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Transaction;

import { Routes, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';

import MainPage from './pages/Main';

function Block() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Block;

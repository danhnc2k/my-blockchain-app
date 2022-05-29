import { Routes, Route } from 'react-router-dom';

import NotFound from '../../components/NotFound';

import MainPage from './pages/Main';
import MineBlock from './pages/MineBlock';

function Block() {
  return (
    <Routes>
      <Route index element={<MainPage />} />
      <Route path="mine-block" element={<MineBlock />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Block;

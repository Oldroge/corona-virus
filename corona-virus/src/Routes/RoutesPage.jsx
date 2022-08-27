import React from 'react';

import { Route, Routes } from 'react-router-dom';
import RankPage from '../Pages/Rank/RankPage';

export default function RoutesPage() {
  return (
    <Routes>
      <Route element={<RankPage />} path="/" exact />
    </Routes>
  );
}

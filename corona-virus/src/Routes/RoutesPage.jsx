import React from 'react';

import { Route, Routes } from 'react-router-dom';
import RankPage from '../Pages/Rank/RankPage';
import ByCountry from '../Pages/ByCountry/ByCountry';

export default function RoutesPage() {
  return (
    <Routes>
      <Route element={<RankPage />} path="/" exact />
      <Route element={<ByCountry />} path="/details" />
    </Routes>
  );
}

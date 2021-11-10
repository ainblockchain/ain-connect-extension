import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Init from '../init';
import Home from '../home';

const AppRoutes = () => (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Init />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  </HashRouter>
);

export default AppRoutes;

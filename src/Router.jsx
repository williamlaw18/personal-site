import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import BadPage from './404';

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<BadPage/>} />
      </Routes>
    </BrowserRouter>
  );
} 

export default PageRouter;

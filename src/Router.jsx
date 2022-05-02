import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useContentful from './useContentful';

import Home from './Home';
import BadPage from './404';
import Page from './Page';

const PageRouter = () => {

  const [entries, setEntries] = useState([])
  const { getEntries } = useContentful()

  useEffect(() => {
    getEntries('project').then((response) => setEntries(response));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<BadPage/>} />

          {entries.map((page , index) =>
            <Route path={(page.title).replaceAll(" ", "_").toLowerCase()} element={<Page content={page} />} key={index}/>
          )}
          
      </Routes>
    </BrowserRouter>
  );
} 

export default PageRouter;

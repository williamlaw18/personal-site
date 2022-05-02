import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useContentful from './useContentful';

import Home from './Home';
import BadPage from './404';
import Page from './Page';
import Loader from './components/loader';

const PageRouter = () => {

  const [entries, setEntries] = useState([])
  const [loaded, setLoaded] = useState(false);
  const { getEntries } = useContentful()

  useEffect(() => {
    getEntries('project').then((response) => setEntries(response));
    setLoaded(true);
  }, [])

  return (
    <React.Fragment>
      
      {loaded == false && <Loader />}

      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />

          {entries.map((page , index) =>
            <Route path={(page.title).replaceAll(" ", "_").toLowerCase()} element={<Page content={page} />} key={index}/>
          )}

          <Route path="*" element={<BadPage/>} />
            
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
} 

export default PageRouter;

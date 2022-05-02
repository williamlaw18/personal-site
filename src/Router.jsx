import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useContentful from './useContentful';

import Home from './Home';
import BadPage from './404';
import Page from './Page';
import Loader from './components/loader';

const PageRouter = () => {

  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])
  const [entries, setEntries] = useState([])
  const { getEntries } = useContentful()

  const [loading, setLoading] = useState(false)

  useEffect(async () => {
    setLoading(true)
    setProjects(await getEntries('project'))
    setExperiences(await getEntries('experience'))
    setLoading(false)
  }, [])

  return (
    <React.Fragment>

      {loading == true && <Loader />}

      <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home/>} />

          {projects.map((page , index) =>
            <Route path={page.url} element={<Page content={page} />} key={index}/>
          )}

          <Route path="*" element={<BadPage/>} />
            
        </Routes>
      </BrowserRouter>

    </React.Fragment>
  );
} 

export default PageRouter;

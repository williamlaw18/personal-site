import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useContentful from './useContentful';

// Top level Modules
import Header from './components/header'
import Footer from './components/footer'

import Home from './Home';
import BadPage from './404';
import Page from './Page';
import Loader from './components/loader';
import Canvas from './components/canvas';

const App = () => {

  const [projects, setProjects] = useState([])
  const [experiences, setExperiences] = useState([])
  const [entries, setEntries] = useState([])
  const { getEntries } = useContentful()

  const [loading, setLoading] = useState(true)
  const [loadtimeout, setLoadtimeout] = useState(false);

  if (loading == false){
    const timeout = setTimeout(() => {
      console.log('t')
      setLoadtimeout(true);
    }, 300)
  }

  useEffect(async () => {
    setLoading(true)
    setProjects(await getEntries('project'))
    setExperiences(await getEntries('experience'))
    setLoading(false)
  }, [])

  return (
    <React.Fragment>

      {loadtimeout == false && <Loader loading={loading}/>}

      <BrowserRouter>

      <Header/>

      <Routes >
          <Route path="/" element={<Home/>} />

          <Route path="/bubbles" element={<Canvas />}/>

          {projects.map((page , index) =>
            <Route path={page.url} element={<Page content={page} />} key={index}/>
          )}

          <Route path="*" element={<BadPage/>} />
            
        </Routes>

        <Footer />

      </BrowserRouter>

    </React.Fragment>
  );
} 

export default App
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useContentful from './useContentful';

import Home from './Home';
import BadPage from './404';
import Page from './Page';

const PageRouter = () => {

  const [entries, setEntries] = useState([])
  const { getAllEntries } = useContentful()

  useEffect(() => {
    getAllEntries().then((response) => setEntries(response));
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<BadPage/>} />

          {entries.map((page) => {
            console.log(page.item.fields.title)
          })}

          {entries.map((page , index) =>

            <Route path={
              `/${((page.item.fields.title).replaceAll(" ", "_")).replaceAll("?", "").toLowerCase()}`
            }
            element={<Page content={page.item.fields} />}
            key={index}
            />
          )}
          
      </Routes>
    </BrowserRouter>
  );
} 

export default PageRouter;

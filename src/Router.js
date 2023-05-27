import React, {useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import { initGA, trackPageView } from './analytics';
import { createBrowserHistory } from 'history';
import FileDownload from './FileDownload';


function Router() {
  useEffect(() => {
    initGA();
    const history = createBrowserHistory();
    trackPageView(history);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path=".well-known/pki-validation/38F68A5F3E44232B71EC5D35EE90F238.txt" element={<FileDownload />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Router;
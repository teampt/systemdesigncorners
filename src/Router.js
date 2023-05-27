import React, {useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import { initGA, trackPageView } from './analytics';
import { createBrowserHistory } from 'history';


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
      </Routes>
    </BrowserRouter>

  );
}

export default Router;
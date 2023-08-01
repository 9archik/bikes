import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { First } from './components/first/First';
import { Second } from './components/second/Second';
import { Main } from './components/main/Main';
import { Catalog } from './components/catalog/Catalog';
import { Wait } from './components/wait/Wait';
import { About } from './components/about/About';
import { Support } from './components/support/Support';


function App() {
  return (
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/main" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/wait" element={<Wait />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default App;

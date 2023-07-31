import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { First } from './components/first/First';
import { Second } from './components/second/Second';
import { Main } from './components/main/Main';
import { Catalog } from './components/catalog/Catalog';




function App() {
  return (
    // <div class="wrapper-inner">
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/main" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      {/* <Route path="/myorder" element={<div>a</div>} />
      <Route path="*" element={<div>aasdasdasdasd</div>} /> */}
    </Routes>
    // </div>
  );
}

export default App;

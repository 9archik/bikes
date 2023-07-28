import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import { First } from './components/first/First';
import { Main } from './components/main/Main';




function App() {
  return (
    <div class="wrapper-inner">
    <Routes class=".body">
      <Route path="/" element={<First />} />
      <Route path="/cart" element={<Main />} />
      {/* <Route path="/profile" element={<div>a</div>} />
      <Route path="/order" element={<div>a</div>} />
      <Route path="/myorder" element={<div>a</div>} />
      <Route path="*" element={<div>aasdasdasdasd</div>} /> */}
    </Routes>
    </div>
  );
}

export default App;

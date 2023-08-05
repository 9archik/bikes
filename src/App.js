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


import scoopy from './static/images/bikes/scoopy.png'
import vario from './static/images/bikes/vario.png'
import fazzio from './static/images/bikes/fazzio.png'
import lexi from './static/images/bikes/lexi.png'

import nmax from './static/images/bikes/nmax.png'
import adv from './static/images/bikes/adv.png'
import pcx from './static/images/bikes/pcx.png'

import vespa from './static/images/bikes/vespa.png'
import xmax from './static/images/bikes/xmax.png'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/main" element={<Main />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/wait" element={<Wait />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
    </Routes>
    <div className='asyncload'>
      <img src={scoopy} alt="" />
      <img src={vario} alt="" />
      <img src={fazzio} alt="" />
      <img src={lexi} alt="" />
      <img src={nmax} alt="" />
      <img src={adv} alt="" />
      <img src={pcx} alt="" />
      <img src={vespa} alt="" />
      <img src={xmax} alt="" />
    </div>
    
    </>
  );
}

export default App;

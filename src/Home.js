import React from 'react';
import { CountryCard, CountryCardButton } from './components/CountryCard';

import './App.css';

function Home() {
  return (
    <div className='App'>
      <div className='navigation-container'>
        <CountryCard>
          <CountryCardButton href='/countries/CI'>Country</CountryCardButton>
        </CountryCard>
        <div className="left-right">
          <div className="arrow left"></div>
          <div className="arrow right"></div>
        </div>
        <CountryCard>
          <CountryCardButton href='/countries'>Countries</CountryCardButton>
        </CountryCard>
      </div>
    </div>
  );
}

export default Home;

// src/App.js
import React, { useState } from 'react';
import './App.css';
import CountrySelector from './CountrySelector';
import CovidData from './CovidData';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <h1>Covid-19 Verileri</h1>
      <CountrySelector onCountryChange={handleCountryChange} />
      <CovidData selectedCountry={selectedCountry} />
    </div>
  );
}

export default App;

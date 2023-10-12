import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CountrySelector({ onCountryChange }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    axios.get('https://covid-api.com/api/regions?per_page=500&order=name&sort=asc')
      .then((response) => {
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error('Hata:', error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);
    onCountryChange(country);
  };

  return (
    <select className='select' value={selectedCountry} onChange={handleCountryChange}>
      <option value="">Tüm Ülkeler</option>
      {countries.map((country) => (
        <option key={country.iso} value={country.iso}>
          {country.name}
        </option>
      ))}
    </select>
  );
}

export default CountrySelector;

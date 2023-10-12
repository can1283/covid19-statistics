// src/components/CovidData.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CovidData({ selectedCountry }) {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      axios.get(`https://covid-api.com/api/reports?date=2020-04-16&iso=${selectedCountry}`)
        .then((response) => {
          setCovidData(response.data.data);
        })
        .catch((error) => {
          console.error('Hata:', error);
        });
    }
  }, [selectedCountry]);

  if (!selectedCountry) {
    return <div>Lütfen bir ülke seçin.</div>;
  }

  if (!covidData) {
    return <div>Veriler yükleniyor...</div>;
  }

  return (
    <div className="container">
        <h2>{covidData[0].region.name}</h2>
        <p className='total'>Total Cases: {covidData[0].confirmed}</p>
        <p className='date'>Date: {covidData[0].date}</p>
        <div className='death'>
          <p>Deaths: {covidData[0].deaths}</p>
        </div>
        <div className='active'>
          <p>Active: {covidData[0].active}</p>
        </div>
        <div className='rate'>
          <p>Fatality Rate: {covidData[0].fatality_rate}</p>
        </div>
    </div>
  );
}

export default CovidData;

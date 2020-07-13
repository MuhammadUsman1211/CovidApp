import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountryPicker } from './compoents'
import { fetchData } from './api'

import image from './images/image.png';

import './App.css';

function App() {
  const [data, setData] = useState([{}]);
  const [country, setCountry] = useState('');
  useEffect(() => {
    async function getData() {
      // You can await here
      const response = await fetchData();
      setData(response);

    }
    getData();

  }, []);

  const handleCountryChange = async (country) => {
    setCountry(country);
    const response = await fetchData(country);
    setData(response);
  }


  return (
    <div className="container">
      <img className={image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Charts data={data} country={country} />
    </div>
  );
}

export default App;

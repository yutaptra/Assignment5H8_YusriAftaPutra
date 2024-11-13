import React, { useState, useEffect } from 'react';
import CurrencyList from './components/CurrencyList';
import './App.css';

const App = () => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);
  const API_KEY = '0bf2adc6a012437a9e711db4c3b3b5a5';

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${API_KEY}&symbols=CAD,IDR,JPY,CHF,EUR,GBP`);
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        setError("Error fetching currency rates. Please try again later.");
        console.error("Error fetching currency rates:", error);
      }
    };
    fetchRates();
  }, []);

  return (
    <div>
      {error ? <p>{error}</p> : <CurrencyList rates={rates} />}
    </div>
  );
};

export default App;

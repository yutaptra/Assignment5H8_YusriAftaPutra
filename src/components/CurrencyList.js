import React from 'react';

const CurrencyList = ({ rates }) => {
  if (Object.keys(rates).length === 0) {
    return <p>Loading exchange rates...</p>;
  }

  const formatRate = (rate) => {
    return Number(rate).toFixed(4).replace(/\.0+$/, '');
  };

  return (
    <div className="currency-container">
      <h2>Exchange Rates (1 USD to Target Currency)</h2>
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rates).map(([currency, rate]) => {
            const exchangeRate = parseFloat(rate);
            const weBuy = (exchangeRate * 1.05).toFixed(4);  // 5% lebih besar
            const weSell = (exchangeRate * 0.95).toFixed(4); // 5% lebih kecil

            return (
              <tr key={currency}>
                <td>{currency}</td>
                <td>{formatRate(weBuy)}</td>
                <td>{formatRate(exchangeRate)}</td>
                <td>{formatRate(weSell)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Rates are based on 1 USD.<br />This application uses API from https://currencyfreaks.com.</p>
    </div>
  );
};

export default CurrencyList;

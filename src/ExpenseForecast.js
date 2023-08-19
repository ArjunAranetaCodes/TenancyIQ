// src/ExpenseForecast.js
import React from 'react';

const ExpenseForecast = ({ placeOfWork, incomeTotal, forecasts }) => {
  return (
    <div>
      <h2>Expense Forecast for {placeOfWork}</h2>
      <p>Income Total: ${incomeTotal}</p>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Place</th>
            <th>Is Viable?</th>
            <th>3-Month Rent (Forecasted)</th>
            <th>3-Month Expenses (Forecasted)</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast => (
            <tr key={forecast.id}>
              <td>{forecast.name}</td>
              <td className={forecast.rent > incomeTotal ? "table-danger" : "table-success"}>
                {forecast.rent > incomeTotal ? "No" : "Yes"}
              </td>
              <td>${forecast.rent * 3}</td>
              <td>${(forecast.dailyExpense * 30 * 3).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseForecast;

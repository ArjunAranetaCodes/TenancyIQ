import React, { useState } from 'react';
import InputForm from './InputForm';
import ExpenseForecast from './ExpenseForecast';
import dataset from './data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [incomeTotal, setIncomeTotal] = useState(null);

  const handleFormSubmit = (place, income) => {
    setPlaceOfWork(place);
    setIncomeTotal(income);
  };

  const forecasts = dataset.map(place => ({
    ...place,
    rent: place.rent,
    dailyExpense: place.dailyExpense,
  }));

  return (
    <div className="container">
      <h1>TenancyIQ</h1>
      <InputForm onSubmit={handleFormSubmit} />
      {incomeTotal !== null && (
        <ExpenseForecast placeOfWork={placeOfWork} incomeTotal={incomeTotal} forecasts={forecasts} />
      )}
    </div>
  );
}

export default App;

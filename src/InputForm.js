// src/InputForm.js
import React from 'react';

const InputForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const placeOfWork = e.target.placeOfWork.value;
    const incomeTotal = parseFloat(e.target.incomeTotal.value);
    onSubmit(placeOfWork, incomeTotal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="placeOfWork">Place of Work</label>
        <input type="text" className="form-control" id="placeOfWork" required />
      </div>
      <div className="form-group">
        <label htmlFor="incomeTotal">Income Total</label>
        <input type="number" step="0.01" className="form-control" id="incomeTotal" required />
      </div>
      <button type="submit" className="btn btn-primary">Calculate Forecast</button>
    </form>
  );
};

export default InputForm;
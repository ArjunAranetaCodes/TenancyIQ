// src/InputForm.js
import React, { useState } from 'react';
import CitySelect from './CitySelect';

const InputForm = ({ onSubmit }) => {
  const [selectedBedrooms, setSelectedBedrooms] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const placeOfWork = e.target.placeOfWork.value;
    const incomeTotal = parseFloat(e.target.incomeTotal.value);
    onSubmit(placeOfWork, incomeTotal, selectedBedrooms);
  };

  const handleBedroomsChange = (e) => {
    setSelectedBedrooms(e.target.value);
  };

  return (
    <div  className='container-fluid'>
    {/*<h1 className='text-center'>TenancyIQ</h1>*/}
    <div className='container-fluid text-center'>
      <img className='' src="images/logo.png"/>
    </div>
    <form onSubmit={handleSubmit}>
      <CitySelect onChange={() => {}} /> {/* Add onChange handler */}
      <div className="form-group mt-4">
        <label htmlFor="incomeTotal">Weekly Income (Estimated)</label>
        <input type="number" step="0.01" className="form-control" id="incomeTotal" required value="1200"/>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="numOfBedrooms">How many bedrooms are you thinking?</label>
        <select
          className="form-control"
          id="numOfBedrooms"
          onChange={handleBedroomsChange}
          value={selectedBedrooms}
          required
        >
          <option value="">Select Number of Bedrooms</option>
          <option value="Not Specified">Not Specified</option>
          <option value="1 Bedroom">1</option>
          <option value="2 Bedrooms">2</option>
          <option value="3 Bedrooms">3</option>
          <option value="4 or more Bedrooms">4 or more</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
    </div>
  );
};

export default InputForm;
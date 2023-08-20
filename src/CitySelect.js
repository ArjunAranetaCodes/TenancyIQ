// src/CitySelect.js
import React from 'react';

const CitySelect = ({ onChange }) => {
  const cities = [
    'Sydney', 'Newcastle', 'Wollongong', 'Central Coast'
  ];

  return (
    <div className="form-group">
      <label htmlFor="placeOfWork">Place of Work</label>
      <select className="form-control" id="placeOfWork" onChange={onChange} required>
        <option value="">Select a City</option>
        {cities.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelect;
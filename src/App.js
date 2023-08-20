import React, { useState } from 'react';
import InputForm from './InputForm';
import ExpenseForecast from './ExpenseForecast';
import dataset from './rent-nsw.json';
import MyProfile from './MyProfile';
import MyHistory from './MyHistory';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [placeOfWork, setPlaceOfWork] = useState('');
  const [incomeTotal, setIncomeTotal] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const [showProfile, setShowProfile] = useState(false); 
  const [showHistory, setShowHistory] = useState(false); 

  const handleMyProfileClick = () => {
    handleReset();
    setShowHistory(false);
    setShowProfile(true);
  };
  const handleMyHistoryClick = () => {
    handleReset();
    setShowHistory(true);
    setShowProfile(false);
  };

  const handleFormSubmit = (place, income, bedrooms) => {
    setPlaceOfWork(place);
    setIncomeTotal(income);
    setSelectedBedrooms(bedrooms); 
    setIsFormSubmitted(true); 

    const filtered = dataset.filter(item => item["Number of Bedrooms"] === bedrooms);
    setFilteredData(filtered);
  };
  
  const handleReset = () => {
    setPlaceOfWork('');
    setIncomeTotal(null);
    setSelectedBedrooms('');
    setIsFormSubmitted(false);
    setShowHistory(false);
    setShowProfile(false);
  };

  const forecasts = dataset.map(place => ({
    ...place,
    rent: place.rent,
    dailyExpense: place.dailyExpense,
  }));

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button
      className="navbar-toggler"
      type="button"
      onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${isMenuCollapsed ? '' : 'show'}`}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="#input-form" onClick={handleReset}>
            Search For Places
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#my-profile" onClick={handleMyProfileClick}>
            My Profile
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#my-history" onClick={handleMyHistoryClick}>
            My History
          </a>
        </li>
      </ul>
    </div>
  </nav>
    <div className="container">
      {(!showProfile && !showHistory) && !isFormSubmitted ? (
        <InputForm onSubmit={handleFormSubmit} />
      ) : (
        <ExpenseForecast
          placeOfWork={placeOfWork}
          incomeTotal={incomeTotal}
          forecasts={forecasts}
          isFormSubmitted={isFormSubmitted}
          filteredData={filteredData}
        />
      )}
      {(!showProfile && !showHistory) && isFormSubmitted && (
        <button type="button" className="btn btn-primary mt-3 mb-3 container-fluid" onClick={handleReset}>
          Search Again
        </button>
      )}
      {showProfile && <MyProfile data={forecasts} />}
      {showHistory && <MyHistory data={forecasts} />}
      
    </div>
    </div>
  );
}

export default App;

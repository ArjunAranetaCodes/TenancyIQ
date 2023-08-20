// src/ExpenseForecast.js
import React, { useState, useRef } from 'react';
import CardGroup from './CardGroup';

const ExpenseForecast = ({ placeOfWork, incomeTotal, forecasts, isFormSubmitted, filteredData }) => {
  const [showCards, setShowCards] = useState(false);
  const [cityName, setCityName] = useState(false);
  const sectionRef = useRef(null);

  const toggleShowCards = (cityValue) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    setShowCards(!showCards);
    setCityName(cityValue);
  };

  const dataToDisplay = filteredData.length > 0 ? filteredData : forecasts;
  const removedEmpty = dataToDisplay.filter(function (data) {
            return data["Dwelling Types"] !== "Total";
        }).filter(function (data) {
          return data["First Quartile Weekly Rent for New Bonds"] !== "-";
        });

  const postalToName = (postalCode) =>{
    let cityName = ""
    switch(postalCode){
      case 2216:
        cityName = "Rockdale"
        break;
      case 2134:
        cityName = "Burwood"
        break;
      case 2212:
        cityName = "Revesby"
        break;
      
    }
    return cityName;
  }

  const imageName = () =>{
    let areas = [];
    let imageName = "images/sydney.png";
    removedEmpty.map(data => (
      areas.push(postalToName(data["Postcode"]))
    ))

    if(areas.indexOf("Rockdale") > -1 && areas.indexOf("Burwood") > -1 && areas.indexOf("Revesby") > -1){
      imageName = "images/rockdale-burwood-revesby.png";
    }else if(areas.indexOf("Rockdale") > -1 && areas.indexOf("Burwood") > -1){
      imageName = "images/rockdale-burwood.png";
    }else if(areas.indexOf("Burwood") > -1 && areas.indexOf("Revesby") > -1){
      imageName = "images/rockdale-burwood-revesby.png";
    }else if(areas.indexOf("Rockdale") > -1){
      imageName = "images/rockdale.png";
    }else if(areas.indexOf("Burwood") > -1){
      imageName = "images/burwood.png";
    }else if(areas.indexOf("Revesby") > -1){
      imageName = "images/revesby.png.png";
    }

    return imageName;
  }

  return (
    <div>
      {isFormSubmitted && (
        <div>
        {isFormSubmitted && <img src={imageName()} className='img-fluid' alt="Forecast"  useMap="#houseMap"/>}
          
        <h2 className='mt-5 text-center'>Rent Forecast for You</h2>
        <p>Weekly Income (<i>Estimated</i>): <b>${incomeTotal}</b></p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Place</th>
              <th>Dwelling Type</th>
              <th>Viability (Next Quarter Projection) </th>
              <th>Evaluation</th>
              <th>Prospects</th>
            </tr>
          </thead>
          
          <tbody>
            {removedEmpty.map(data => (
              <tr key={data.id}>
                <td>{postalToName(data["Postcode"])}</td>
                <td>{data["Dwelling Types"]}</td>
                <td className={
                  
                    incomeTotal - (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) + 
                    (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) * (parseFloat(data["Quarterly change in Median Weekly Rent"],2) / 100.0)))
                    > 500
                    ? "table-success" :  "table-info"
                    
                }>{
                  incomeTotal - (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) + 
                  (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) * (parseFloat(data["Quarterly change in Median Weekly Rent"],2) / 100.0)))
                  > 500
                  ? "Very Good" :  "Good"
                  }</td>
                <td>
                  <details>
                  <summary>Show</summary>
                  <p>Projected Rent Next Quarter: {(parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) + 
                    (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) * (parseFloat(data["Quarterly change in Median Weekly Rent"],2) / 100.0)))}</p>
                  <p>Evaluated with <b>[Third Quartile Weekly Rent for New Bonds]</b> + (<b>[Third Quartile Weekly Rent for New Bonds] * [Quarterly change in Median Weekly Rent]</b>)</p>
                  <h3>Amount: </h3>
                  <p>{(parseFloat(data["Third Quartile Weekly Rent for New Bonds"]))} + 
                    {"(" + (parseFloat(data["Third Quartile Weekly Rent for New Bonds"])) + " * " +
                    (parseFloat(data["Quarterly change in Median Weekly Rent"],2) / 100.0) + ") = "}
                    {(parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) + 
                    (parseFloat(data["Third Quartile Weekly Rent for New Bonds"]) * (parseFloat(data["Quarterly change in Median Weekly Rent"],2) / 100.0)))} </p>
                </details>
                </td>
                <td>
                <button className="btn btn-primary" onClick={() => toggleShowCards(postalToName(data["Postcode"]))}>
                  Explore
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          {showCards && <CardGroup cityName={cityName}/>}
        <div ref={sectionRef} >
        </div>
        </div>
      )}
      </div>
  );
};

export default ExpenseForecast;


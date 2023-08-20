// src/ProfilePage.js
import React from 'react';
import './CardGroup.css';

const ProfilePage = ({ card, sectionRef}) => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const getRandomDescription = () => {
    const descriptions = [
      'Cozy and inviting home perfect for a family.',
      'Spacious interior with modern amenities.',
      'Beautifully landscaped backyard for outdoor enjoyment.',
      'Luxurious living with top-notch features.',
      'Charming historic house with character.',
    ];
    const randomIndex = getRandomNumber(0, descriptions.length - 1);
    return descriptions[randomIndex];
  };

  const providerProfile = {
    name: 'Jane Smith',
    age: 30,
    occupation: 'Provider',
    email: 'janesmith@example.com',
  };

  const userProfile = {
    name: 'Jenny Doe',
    age: 30,
    occupation: 'Engineer',
    email: 'jennydoe@example.com',
  };

  const houseProfile = {
    type: 'Middle Class House',
    bathrooms: getRandomNumber(1, 3),
    area: `${getRandomNumber(150, 250)} sqm`,
    description: getRandomDescription(),
  };

  return (
    <div className="profile-page" ref={sectionRef} >
      <div className="profile-header">
        <img src={card.imageSrc} alt="House" className="profile-image container-fluid" />
        <h1 className='mt-5'>{card.address}</h1>
      </div>
      <div className="house-profile  mt-5 profile-section">
        <h2 className='text-center'>House Profile</h2>
        <p>Type: {houseProfile.type}</p>
        <p>Bathrooms: {houseProfile.bathrooms}</p>
        <p>Area: {houseProfile.area}</p>
        <p>Description: {houseProfile.description}</p>
      </div>
      <div className="container provider-profile  mt-5 ">
        <h2 className='text-center'>Provider's Profile</h2>
        <div className="row">
            <div className="col">
                <img src="images/provider.png" alt="House" className="profile-image container-fluid" />
            </div>
            <div className="col profile-section">
                <p>Name: {providerProfile.name}</p>
                <p>Age: {providerProfile.age}</p>
                <p>Occupation: {providerProfile.occupation}</p>
                <p>Email: {providerProfile.email}</p>
            </div>
        </div>
      </div>
      <div className="container user-profile mt-5">
        <h2 className='text-center'>Your Profile</h2>
        
        <div className="row">
            <div className="col">
                <img src="images/user1.png" alt="House" className="profile-image container-fluid" />
            </div>
            <div className="col profile-section">
                <p>Name: {userProfile.name}</p>
                <p>Age: {userProfile.age}</p>
                <p>Occupation: {userProfile.occupation}</p>
                <p>Email: {userProfile.email}</p>
            </div>
        </div>
        
        <h3 className='text-center mt-5'>Recent Payments</h3>
        <table className="table">
            <thead>
            <tr>
                <th>Date</th>
                <th>Amount</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <td>25/07/2023</td>
                    <td>$700</td>
                </tr>
                <tr>
                    <td>18/07/2023</td>
                    <td>$700</td>
                </tr>
                <tr>
                    <td>11/07/2023</td>
                    <td>$700</td>
                </tr>
                <tr>
                    <td>4/07/2023</td>
                    <td>$700</td>
                </tr>
                <tr>
                    <td>27/06/2023</td>
                    <td>$680</td>
                </tr>
            </tbody>
        </table>
        <h3 className='text-center mt-5'>Feeling good about this?</h3>
        <button type="button" className="btn btn-success mt-3 mb-3 container-fluid">
          Absolutely!
        </button>

        <h3 className='text-center mt-5'>Do you want to search again?</h3>
      </div>
    </div>
  );
};

export default ProfilePage;

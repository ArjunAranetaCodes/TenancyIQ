// src/CardGroup.js
import React, { useState, useRef } from 'react';
import ProfilePage from './ProfilePage';
import './CardGroup.css';


const CardGroup = ({cityName}) => {
    const sectionRef = useRef(null);
  const cardData = [
    {
      address: '123 Elm Street, ' + cityName + ', NSW',
      description: 'Cozy apartment near parks.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '456 Oak Avenue, ' + cityName + ', NSW',
      description: 'Spacious 3-bedroom house with garden.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '789 Maple Road, ' + cityName + ', NSW',
      description: 'Modern 1-bedroom unit in a quiet neighborhood.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '101 Pine Lane, ' + cityName + ', NSW',
      description: 'Charming house with character.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '222 Birch Street, ' + cityName + ', NSW',
      description: 'Contemporary townhouse with amenities.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '333 Cedar Drive, ' + cityName + ', NSW',
      description: 'Contemporary townhouse with amenities.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '444 Elm Street, ' + cityName + ', NSW',
      description: 'Elegant apartment in a prime location.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
    {
      address: '555 Oak Avenue, ' + cityName + ', NSW',
      description: 'Family-friendly house near schools.',
      imageSrc: 'images/house' + (Math.floor(Math.random() * 4) + 1) + '.png',
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);

  const chunkSize = 4; // Number of cards per row

  // Split card data into chunks of specified size
  const chunkedCardData = [];
  for (let i = 0; i < cardData.length; i += chunkSize) {
    chunkedCardData.push(cardData.slice(i, i + chunkSize));
  }

  const toggleShowProfile = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      {chunkedCardData.map((chunk, rowIndex) => (
        <div className="card-group" key={rowIndex}>
          {chunk.map((card, index) => (
            <div className="card" key={index}>
              <img src={card.imageSrc} className="card-img-top" alt="House" />
              <div className="card-body">
                <h5 className="card-title">{card.address}</h5>
                <p className="card-text">{card.description}</p>
                <button className='btn btn-primary'  onClick={() => toggleShowProfile(card)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      ))}
        {selectedCard && <ProfilePage card={selectedCard} sectionRef ={sectionRef} />}
    </div>
  );
};

export default CardGroup;

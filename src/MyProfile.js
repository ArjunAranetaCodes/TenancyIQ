// src/MyProfile.js
import React from 'react';

const userProfile = {
  name: 'Jenny Doe',
  age: 30,
  occupation: 'Engineer',
  email: 'jennydoe@example.com',
};


const MyProfile = ({ data }) => {
  return (
    <div>
      <h2>My Profile</h2>

      <div className="container user-profile mt-5">
        
        <div className="row">
            <div className="col">
                <img src="images/user1.png" alt="House" className="profile-image container-fluid" />
            </div>
            <div className="col">
                <p>Name: {userProfile.name}</p>
                <p>Age: {userProfile.age}</p>
                <p>Occupation: {userProfile.occupation}</p>
                <p>Email: {userProfile.email}</p>
            </div>
        </div>
    </div>
    </div>
  );
};

export default MyProfile;
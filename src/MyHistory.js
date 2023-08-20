// src/MyHistory.js
import React from 'react';

const MyHistory = ({ data }) => {
  return (
    <div>
      <h2>Recent Payments</h2>
      <table className="table table-bordered">
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
    </div>
  );
};

export default MyHistory;
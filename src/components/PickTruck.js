import React, { useState, useEffect } from 'react';

export default function PickTruck() {
  const [trucks, setTrucks] = useState([]);

  async function fetchTrucks() {
    const res = await fetch('https://express-delivery-api.herokuapp.com/api/v1/trucks');
    res.json()
      .then((res) => setTrucks(res.data));
  }

  useEffect(() => {
    fetchTrucks();
  }, []);


  return (
    <div>
      <h2>Select Truck</h2>
      <p>Please select a truckm from the list below</p>
      <input type="search" name="" id="" />
      <div>
        <ul>
          {trucks.map((truck) => (<li key={truck.id}>{truck.truck_license_number}</li>))}
        </ul>
      </div>
    </div>
  );
}

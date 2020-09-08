import React, { useEffect, useState } from 'react';

export default function PickTruck() {
  const [trucks, setTrucks] = useState([]);

  async function fetchTrucks() {
    try {
      const res = await fetch(
        'https://express-delivery-api.herokuapp.com/api/v1/trucks',
      )
      console.log(res)
      const data = await res.json()
      console.log(data)
      setTrucks(data);
    } catch (error) {
      console.error(error)
    }
    
    
   
  }

  useEffect(() => {
    fetchTrucks();
  }, []);

  return (
    <div>
      <h2>Select Truck</h2>
      <p>Please select a truck from the list below</p>
      <div>
        <ul>
          {trucks.map((truck) => (
            <li key={truck.id}>{truck.truck_license_number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
// import styled from "styled-components"

export default function PickRoute() {
  const [routes, setRoutes] = useState([]);

  async function fetchRoutes() {
    const res = await fetch('https://express-delivery-api.herokuapp.com/api/v1/deliveryroutes');
    res.json()
      .then((res) => setRoutes(res.data));
  }

  useEffect(() => {
    fetchRoutes();
  }, []);

  return (
    <div>
      <h2>Select Route</h2>
      <p>Please select a route from the list below</p>
      <input type="search" />
      <div>
        <ul>
          {routes.map((route) => (<li key={route.id}>{route.route_name}</li>))}
        </ul>
      </div>
      <input type="button" value="Next" />
    </div>
  );
}

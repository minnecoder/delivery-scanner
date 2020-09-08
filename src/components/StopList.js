import React from 'react';
import styled from "styled-components"
import stops from "../stops.json"

export default function StopList() {
  return (
    <div>
      <h2>Stops</h2>
      <div>
        {stops.map((stop)=> {
            return(
              <ListItem key={stop.custName}>
                <Top>
                  <h3>{stop.custName}</h3>
                  <p>{stop.contact}</p>
                  <p>
                    {stop.address}
                    {" "}
                    {stop.city}
                  </p>
                </Top>
                <Bottom>
                  <p>
                    {stop.packages}
                    {' '}
                    packages
                  </p>
                  <p>{stop.deliveryType}</p>
                </Bottom>
              </ListItem>
            )
          })}
        <div />
      </div>
    </div>
  );
}


const ListItem = styled.div`
margin: 1rem;
padding: .5rem 0 .5rem .5rem;
border: 1px solid lightgray;
border-radius: 8px;
h3 {
  margin: 0;
}
p {
  margin: 0;
}
`

const Top = styled.div`

`

const Bottom = styled.div`
display: flex;
p{
  padding-right: .25rem;
}
`
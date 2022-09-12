import React from 'react'

export const CarSearchResult = ({ car, errors }) => (
  <>
    {car && (
      <>
        <p><b>Car Found</b></p>
        <p>Model: {car.model}</p>
        <p>Brand: {car.brand.name}</p>
        <p>Company: {car.company.name}</p>
      </>
    )}
    {errors
      && errors.map((error, index) => <p key={index}><b>{error.message}</b></p>)}
  </>
)

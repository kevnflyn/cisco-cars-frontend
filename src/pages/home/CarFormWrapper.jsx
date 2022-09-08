import React, { useState } from 'react'
import CarForm from './CarForm'
import Brand from '@src/components/image/Brand'

import styles from './CarFormWrapper.module.less'
import { getRequest } from '../../utils/fetch'

export const CarFormWrapper = () => {
  const [results, setResults] = useState()
  const [error, setError] = useState()

  const onSubmitted = async ({ carId }) => {
    try {
      const { payload: car } = await getRequest(`http://localhost:3000/api/cars/${carId}`)
      const { payload: brand } = await getRequest(`http://localhost:3000/api/brands/${car.brandId}`)
      const { payload: company } = await getRequest(`http://localhost:3000/api/companies/${brand.companyId}`)
      const carData = {
        carName: car.model,
        carBrand: brand.name,
        carCompany: company.name
      }
      setResults(carData)
      setError(null)
    } catch ({ error }) {
      setError(error)
      setResults(null)
    }
  }

  const onValidationFailure = () => {
    setResults(null)
    setError(null)
  }

  return (
    <div className={styles.carFormWrapper}>
      <div className={styles.brand}>
        <Brand/>
      </div>
      <CarForm
        onSubmitted={onSubmitted}
        onValidationFailure={onValidationFailure}
      />
      {}
      {results && (
        <>
          <p><b>Car Found</b></p>
          <p>Model: {results.carName}</p>
          <p>Brand: {results.carBrand}</p>
          <p>Company: {results.carCompany}</p>
        </>
      )}
      {error && <p><b>{error.message}</b></p>}
    </div>
  )
}

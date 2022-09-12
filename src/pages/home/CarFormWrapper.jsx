import React, { useState } from 'react'
import { Form } from 'antd'
import { CarForm } from './CarForm'
import { Brand } from '@src/components/image/Brand'
import { CarSearchResult } from './CarSearchResult'

import styles from './CarFormWrapper.module.less'

export const CarFormWrapper = () => {
  const [results, setResults] = useState(null)
  const [errors, setErrors] = useState(null)
  return (
    <div className={styles.carFormWrapper}>
      <div className={styles.brand}>
        <Brand/>
      </div>
      <CarForm
        setResults={setResults}
        setErrors={setErrors}
      />
      <CarSearchResult car={results} errors={errors}/>
    </div>
  )
}

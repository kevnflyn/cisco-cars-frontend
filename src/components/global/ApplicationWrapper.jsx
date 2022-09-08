import React from 'react'
import styles from './ApplicationWrapper.module.less'

export const ApplicationWrapper = ({ children }) => (
  <div className={styles.publicWrapper}>
    {children}
  </div>
)

import React from 'react'
import { InputNumber } from 'antd'

import styles from './Search.module.less'

export const Search = ({
  onPressEnter,
  onChange,
  placeholder,
  value,
  size
}) => {
  return (
    <div className={styles.search}>
      <InputNumber
        className={styles.input}
        onChange={onChange}
        onPressEnter={onPressEnter}
        placeholder={placeholder}
        value={value}
        size={size}
      />
    </div>
  )
}

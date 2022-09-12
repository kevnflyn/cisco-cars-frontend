import React from 'react'
import { Form } from 'antd'
import { Search } from '@src/components/form/Search'

import styles from './FormFieldCarsSearch.module.less'

export const FormFieldCarsSearch = ({ onPressEnter }) => {
  return (
    <Form.Item
      name='carId'
      className={styles.formField}
    >
      <Search
        placeholder='Search for cars using number IDs e.g. 1'
        size='large'
        onPressEnter={onPressEnter}
      />
    </Form.Item>
  )
}

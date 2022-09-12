import React from 'react'
import { Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

import styles from './SearchButton.module.less'

export const SearchButton = ({ onClick }) => (
  <Button
    className={styles.button}
    onClick={onClick}
    type='link'
  >
    <SearchOutlined/>
  </Button>
)

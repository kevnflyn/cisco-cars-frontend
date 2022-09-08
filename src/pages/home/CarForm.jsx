import React from 'react'
import { Form, Button } from 'antd'
import { Search } from '@src/components/form/Search'
import { SearchOutlined } from '@ant-design/icons'
import Flex from 'styled-flex-component'

import styles from './CarForm.module.less'

const CarForm = ({ onSubmitted, onValidationFailure }) => {
  const [form] = Form.useForm()

  const submit = async () => {
    await form.validateFields()
    const values = form.getFieldsValue()
    onSubmitted(values)
  }

  const validator = async (_rule, value) => {
    if (value === null) {
      onValidationFailure()
      throw new Error('Number ID required')
    }
  }

  return (
    <Form
      className={styles.carForm}
      name='carform'
      form={form}
      layout={{
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }}
    >
      <Flex>
        <Button
          className={styles.button}
          onClick={submit}
          type='link'
        >
          <SearchOutlined/>
        </Button>
        <Form.Item
          name='carId'
          rules={[{ validator }]}
          className={styles.formField}
        >
          <Search
            placeholder='Search for cars using number IDs e.g. 1'
            size='large'
            onPressEnter={submit}
          />
        </Form.Item>
      </Flex>
    </Form>
  )
}

export default CarForm

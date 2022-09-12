import React, { useState } from 'react'
import { Form } from 'antd'
import Flex from 'styled-flex-component'

import { submitCarForm } from './submitCarForm'
import { FormFieldApiType } from './FormFieldApiType'
import { FormFieldCarsSearch } from './FormFieldCarsSearch'
import { SearchButton } from './SearchButton'

import styles from './CarForm.module.less'

export const CarForm = ({ setResults, setErrors }) => {
  const [form] = Form.useForm()
  const submit = () => {
    submitCarForm(form, setResults, setErrors)
  }
  return (
    <Form
      initialValues={{
        apiType: 'restful'
      }}
      className={styles.carForm}
      name='carform'
      form={form}
      layout={{
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      }}
    >
      <Flex className={styles.fieldsWrapper} alignCenter column full>
        <FormFieldApiType/>
        <Flex full>
          <SearchButton onClick={submit}/>
          <FormFieldCarsSearch onPressEnter={submit}/>
        </Flex>
      </Flex>
    </Form>
  )
}

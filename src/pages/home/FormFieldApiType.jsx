import React from 'react'
import { Form, Radio } from 'antd'

export const FormFieldApiType = () => (
  <Form.Item name='apiType'>
    <Radio.Group buttonStyle='solid'>
      <Radio.Button value='restful'>REST Request</Radio.Button>
      <Radio.Button value='graphql'>GraphQL Request</Radio.Button>
    </Radio.Group>
  </Form.Item>
)

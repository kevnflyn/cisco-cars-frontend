import React from 'react'
import { ApplicationWrapper } from '@src/components/global/ApplicationWrapper'
import { CarFormWrapper } from './CarFormWrapper'
import Flex from 'styled-flex-component'

export const HomePage = () => (
  <ApplicationWrapper>
    <Flex full justifyCenter>
      <CarFormWrapper/>
    </Flex>
  </ApplicationWrapper>
)

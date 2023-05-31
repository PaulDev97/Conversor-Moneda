import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from '../Display/Display'
import { MainContainer } from './MainStyled'

const Main = () => {
  return (
    <MainContainer>
      <Display/>
      <Buttons/>
    </MainContainer>
  )
}

export default Main

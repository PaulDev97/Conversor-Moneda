import React from 'react'
import Buttons from '../Buttons/Buttons'
import Display from '../Display/Display'
import { MainContainer } from './MainStyled'
import Header from '../Header/Header'

const Main = () => {
  return (
    <MainContainer>
      <Header/>
      <Display/>
      <Buttons/>
    </MainContainer>
  )
}

export default Main

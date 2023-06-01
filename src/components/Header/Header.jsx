import React from 'react'
import { BoxPrice, SpanBlue } from './HeaderStyled'

const Header = () => {
  return (
    <div>
      <h1>Conversor Dolar <SpanBlue>Blue</SpanBlue></h1>

      <BoxPrice>
        <span>Dolar estadounidense: $0.0042</span>
        <span>Dolar Blue: $488</span>
      </BoxPrice>
    </div>
  )
}

export default Header

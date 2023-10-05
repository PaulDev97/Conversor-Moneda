import React from 'react'

import {  useSelector } from 'react-redux'
import { BoxInputs, Input } from './InputsStyled'
import { useDollarValue } from '../../fetchApi'


const Inputs = () => {

  const displayNumber = useSelector((state) => state.operation.display)

  const { type_money } = useSelector((state) => state.operation)

  let numbers = displayNumber.join('')

  const { dollarBlue } = useDollarValue()


  
  let priceDollarBlue = Object.values(dollarBlue)[2]

  

  const Conversion = (money) => {


    if(money === 'EEUU'){
      return '$' + (priceDollarBlue  * (numbers * 1)).toFixed(2)
    }
    else {
      return '$' + ( (numbers * 1) / priceDollarBlue ).toFixed(2)
    }

  }
  




  return (
    <>
      {

         type_money === 'EEUU' 

          ?<BoxInputs>
          <Input  selected={type_money === 'EEUU'}>{ displayNumber.length ? `$${numbers}` : '$0.00'}</Input> 
          <Input>{ displayNumber.length ? Conversion(type_money) : '$0.00' }</Input>
          </BoxInputs>

          
          
  
          :   <BoxInputs>
          <Input>{ displayNumber.length ? Conversion(type_money) : '$0.00' }</Input>
          <Input  selected={type_money === 'Argentina'}>
            { displayNumber.length ? `$${numbers}` : '$0.00'}
          </Input> 
         </BoxInputs>

        }
          
      


    </>
  )
}

export default Inputs

import React from 'react'
import { Input } from '../Display/DisplayStyled'
import {  useSelector } from 'react-redux'
import { BoxInputs } from './InputsStyled'


const Inputs = () => {

  const displayNumber = useSelector((state) => state.operation.display)

  const { type_money } = useSelector((state) => state.operation)

  let numbers = displayNumber.join('')

  

  const Conversion = (money) => {


    if(money === 'EEUU'){
      return '$' + (488  * (numbers * 1)).toFixed(2)
    }
    else {
      return '$' + (0.0042 * (numbers * 1)).toFixed(2)
    }

  }
  


  console.log(type_money)



  return (
    <>
    
        {

          type_money === 'EEUU' 

          ?   <BoxInputs>
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

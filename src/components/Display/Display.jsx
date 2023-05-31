
import { ButtonCountry, DisplayContainer } from './DisplayStyled'
import { useDispatch, useSelector } from 'react-redux'
import { changeMoney } from '../../operationSlice/operationSlice'
import { ChangeBtnMoney } from '../Buttons/ButtonsStyled'
import Inputs from '../Inputs/Inputs'

const Display = () => {


  const dispatch = useDispatch()

  const { type_money } = useSelector(state => state.operation)


 
  return (

    <>
      <div>
        <span>Dolar Blue: $488</span>
        <span>Dolar estadounidense: $0.0042</span>
      </div>
    
      <DisplayContainer>

        <ChangeBtnMoney>

          <ButtonCountry  selected={type_money === 'EEUU'} onClick={() => dispatch(changeMoney('EEUU'))}>
            Estados Unidos
          </ButtonCountry >

          <ButtonCountry  selected={type_money === 'Argentina'} onClick={() => dispatch(changeMoney('Argentina'))}>
            Argentina
          </ButtonCountry >

        </ChangeBtnMoney> 

        <Inputs/>

      </DisplayContainer>

             
      
    </>
  )
}

export default Display


import { ButtonCountry, DisplayContainer } from './DisplayStyled'
import { useDispatch, useSelector } from 'react-redux'
import { changeMoney } from '../../operationSlice/operationSlice'
import { ChangeBtnMoney } from '../Buttons/ButtonsStyled'
import Inputs from '../Inputs/Inputs'

const Display = () => {


  const dispatch = useDispatch()

  const { type_money } = useSelector(state => state.operation)


 
  return (

    <DisplayContainer>

      <ChangeBtnMoney>

        <ButtonCountry  selected={type_money === 'EEUU'} onClick={() => dispatch(changeMoney('EEUU'))}>
          <img src="../img/eeuu.png" alt="" />
        </ButtonCountry >

        <ButtonCountry  selected={type_money === 'Argentina'} onClick={() => dispatch(changeMoney('Argentina'))}>
            <img src="../img/argentina.png" alt="" />
        </ButtonCountry >

      </ChangeBtnMoney> 

      <Inputs/>

    </DisplayContainer>

             
      
    
  )
}

export default Display

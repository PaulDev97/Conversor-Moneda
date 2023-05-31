
import { ButtonsContainer, ColumnRigth, ContainerDiv, DeleteNumber, NumberBtn } from './ButtonsStyled'
import { deleteAll, deleteNumber, numbers } from '../../operationSlice/operationSlice'
import { useDispatch, useSelector } from 'react-redux'


const Buttons = () => {


  const dispatch = useDispatch()

  const { display } = useSelector(state => state.operation)
  
  



  return (

    <ContainerDiv>
      <ButtonsContainer>
        <NumberBtn onClick={() => dispatch(numbers(1))} type='button'>1</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(2))} type='button'>2</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(3))} type='button'>3</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(4))} type='button'>4</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(5))} type='button'>5</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(6))} type='button'>6</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(7))} type='button'>7</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(8))} type='button'>8</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(9))} type='button'>9</NumberBtn>
        <NumberBtn onClick={() => dispatch(numbers(0))} type='button'>0</NumberBtn>
        <DeleteNumber onClick={() => dispatch(numbers('.'))} type='button' disabled={!display.length || display.find((item) => item === '.')}>.</DeleteNumber>
      </ButtonsContainer>

      <ColumnRigth>

        <DeleteNumber onClick={() => dispatch(deleteAll())} disabled={!display.length}>C</DeleteNumber>
        <DeleteNumber onClick={() => dispatch(deleteNumber())} disabled={!display.length}>x</DeleteNumber>
      </ColumnRigth>

    </ContainerDiv>



  )
}

export default Buttons

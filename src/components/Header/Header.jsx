import { BoxPrice, HeaderContainer, SpanBlue } from './HeaderStyled'
import { useDollarValue } from '../../fetchApi'

const Header = () => {

  const { dollarBlue , loading } = useDollarValue()


  
  let priceDollarBlue = Object.values(dollarBlue)[2]

  

  return (
    <HeaderContainer>
      <h1>Conversor Dolar <SpanBlue>Blue</SpanBlue></h1>
      <span>En este sitio podras encontrar el precio de la cotización del Dólar Blue en Argentina actualizado al día de hoy.</span>

      <BoxPrice>
       

        {
          loading ? <span>Cargando... 🔥</span> : <span>Dolar blue: ${priceDollarBlue}</span>
        }
      
        
        
      </BoxPrice>
    </HeaderContainer>
  )
}

export default Header

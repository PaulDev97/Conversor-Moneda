import { BoxPrice, SpanBlue } from './HeaderStyled'
import { useDollarValue } from '../../fetchApi'

const Header = () => {

  const { dollarBlue , loading } = useDollarValue()


  
  let priceDollarBlue = Object.values(dollarBlue)[2]

  

  return (
    <div>
      <h1>Conversor Dolar <SpanBlue>Blue</SpanBlue></h1>

      <BoxPrice>
        <span>Dolar estadounidense: $0.0042</span>

        {
          loading ? <span>Cargando... 🔥</span> : <span>Dolar blue: ${priceDollarBlue}</span>
        }
      
        
        
      </BoxPrice>
    </div>
  )
}

export default Header

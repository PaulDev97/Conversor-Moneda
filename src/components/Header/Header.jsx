import React, { useEffect, useState } from 'react'
import { BoxPrice, SpanBlue } from './HeaderStyled'

const Header = () => {

  const [ dolarBlue , setDolarBlue] = useState([]);
  const [ loading, setLoading ] = useState(true)


  const GetDolar = async() => {
    const url = 'https://api.bluelytics.com.ar/v2/latest';

    const response = await fetch(url)

    const data = await response.json()

    
    setDolarBlue([data])
    setLoading(false)

    
    
  }

  console.log(dolarBlue)

  useEffect(() => {
    GetDolar()
  },[])

  return (
    <div>
      <h1>Conversor Dolar <SpanBlue>Blue</SpanBlue></h1>

      <BoxPrice>
        <span>Dolar estadounidense: $0.0042</span>

        {
          loading && <span>Cargando</span>
        }
        {
          dolarBlue?.map((item) => (
             <span>Dolar blue: ${item.blue.value_buy}</span>
          ))
          
        }
        
      </BoxPrice>
    </div>
  )
}

export default Header

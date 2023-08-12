import { useState } from "react";
import { useEffect } from "react";


export const useDollarValue =  () => {

  const [ loading, setLoading ] = useState(true)
  const [ dollarBlue , setDollarBlue] = useState([]);

  useEffect(() => {

  const fetchData = async () => {
    const url = 'https://api.bluelytics.com.ar/v2/latest';

    const response = await fetch(url)

    const data = await response.json()

    
    setDollarBlue(data.blue)
    setLoading(false)

    
  }

  
  fetchData()

  },[])

  return { dollarBlue , loading }
}
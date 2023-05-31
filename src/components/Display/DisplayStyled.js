import styled from "styled-components"


export const DisplayContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  
`


export const ButtonCountry = styled.button `
  padding: 10px 20px;
  border-radius:10px;
  cursor: pointer;
  background-color:#182334 ;
  border: 3px solid ${({selected}) => selected ? '#ffb224': 'black'};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 50px;
  img {
    width: 80%;
    height: 80%;
    
  }
`
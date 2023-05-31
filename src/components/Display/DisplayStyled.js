import styled from "styled-components"


export const DisplayContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Input = styled.div `

  border-radius: 10px;
  width: 200px;
  background: #121212;
  box-shadow: inset -21px -21px 43px #0f0f0f,
            inset 21px 21px 43px #151515;

  color: white;
  
  padding: 10px 5px;
  display: flex;
  justify-content: end;
  
  border: 2px groove ${({selected}) => selected ? 'orange': '#182334'};
  
`

export const ButtonCountry = styled.button `
  padding: 10px 20px;
  border-radius:10px;
  cursor: pointer;
  border: 2px groove ${({selected}) => selected ? 'orange': '#182334'};
`
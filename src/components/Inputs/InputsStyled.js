import styled from "styled-components"


export const BoxInputs = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  
`

export const Input = styled.div `

  border-radius: 10px;
  width: 200px;
  background: #182334;
  color: white;
  border: 3px;
  padding: 13px 5px;
  display: flex;
  justify-content: end;
  
  border: 3px solid ${({selected}) => selected ? '#ffb224': 'black'};
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
  
`
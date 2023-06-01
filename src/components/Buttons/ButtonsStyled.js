import styled from "styled-components"


export const ContainerDiv = styled.div `
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 290px;
  margin-top: 20px;
  
`

export const ButtonsContainer = styled.div `
width: 170px;
display: grid;
grid-template-columns: repeat(3, 50px);
grid-template-rows: repeat(4, 1fr);
gap: 10px;
justify-content: center;
align-items: center;


`


export const NumberBtn = styled.button `
padding: 10px 20px;
border-radius: 10px;

background: #121212;

color: white;
cursor: pointer;

border: 1px groove black;
font-size: 18px;
-webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
`


export const ColumnRigth = styled.div `
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  
  

`


export const DeleteNumber = styled.button `
padding: 10px 20px;
border-radius: 10px;

background: #121212;


color: white;
cursor: pointer;
border: 1px groove black;
font-size: 18px;
-webkit-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);
box-shadow: 0px 0px 11px 1px rgba(0,0,0,0.75);


`

export const ChangeBtnMoney = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;


`



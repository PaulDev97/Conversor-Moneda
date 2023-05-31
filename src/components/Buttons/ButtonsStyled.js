import styled from "styled-components"


export const ContainerDiv = styled.div `
  display: flex;
`

export const ButtonsContainer = styled.div `
width: 170px;
display: grid;
display: grid;
grid-template-columns: repeat(3, 50px);
grid-template-rows: repeat(4, 1fr);
gap: 6px;

justify-content: center;
align-items: center;

`


export const NumberBtn = styled.button `
padding: 10px 20px;
border-radius: 10px;

background: #121212;
box-shadow: inset -21px -21px 43px #0f0f0f,
            inset 21px 21px 43px #151515;

color: white;
cursor: pointer;

border: 1px groove black;
`


export const ColumnRigth = styled.div `
  display: flex;
  flex-direction: column;
  gap: 6px 0;
  

`


export const DeleteNumber = styled.button `
padding: 10px 20px;
border-radius: 10px;

background: #121212;
box-shadow: inset -21px -21px 43px #0f0f0f,
            inset 21px 21px 43px #151515;

color: white;
cursor: pointer;
border: 1px groove black;


`

export const ChangeBtnMoney = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;

`
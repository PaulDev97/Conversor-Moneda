import { createSlice } from "@reduxjs/toolkit"




const initialState = {
  type_money : 'EEUU',
  display: []
}


export const operationSlice = createSlice({
  name:'operation',
  initialState: initialState,

  reducers: {

    changeMoney: (state, action) => {
      return{
        ...state,
        display: [],
        type_money: action.payload
      }
    },

    numbers: (state,action) => {
    
      return {
        ...state,
        display:[ ...state.display, action.payload]
      }

    },

    deleteNumber: (state) => {
      return {
        ...state,
        display: [...state.display].slice(0,-1)
      }
    },

    deleteAll: (state) => {
      return {
        ...state,
        display: []
      }
    }
  }
})



export const { changeMoney, numbers, deleteNumber, deleteAll} = operationSlice.actions

export default operationSlice.reducer


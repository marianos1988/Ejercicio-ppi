 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {
  listCurrencies: {
    currencie:string 
    properties: {
      name: string
      symbol:string
    }
  }[]
    }


 const initialState:ListCurrencies= {
  listCurrencies: [{
      currencie: "",
      properties: {
        name: "",
        symbol:"",
      }
    }]};


 const CurrenciesSlice = createSlice({
    name: "currencies",
    initialState: initialState,
    reducers: {
      setAllCurrencies: (state:any,action) => {
        state.listCurrencies = action.payload;
      },

    } 
 }); 

 export const { setAllCurrencies} = CurrenciesSlice.actions;

export default CurrenciesSlice.reducer; 


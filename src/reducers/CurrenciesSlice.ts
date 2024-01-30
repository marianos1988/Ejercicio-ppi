 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {

    currencies: {

        name:string,
        symbol: string
      }
    }
  | {}
 const initialState:ListCurrencies= {
  currencies: {}
 }


 const CurrenciesSlice = createSlice({
    name: "currencies",
    initialState: initialState,
    reducers: {
      setAllCurrencies: (state:any,action) => {
        state.currencies = action.payload;
      }
    } 
 }); 

 export const { setAllCurrencies } = CurrenciesSlice.actions;

export default CurrenciesSlice.reducer; 

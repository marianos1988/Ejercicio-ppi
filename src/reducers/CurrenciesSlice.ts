 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {

    }


 const initialState:ListCurrencies= {
  listCurrencies: {
    orderFirstDollar: [{
      currencie: "",
      properties: {
        name: "",
        symbol:"",
      }
    }],
    orderFirstEuro:[{
      currencie: "",
      properties: {
        name: "",
        symbol:"",
      }
    }],
  }
 }


 const CurrenciesSlice = createSlice({
    name: "currencies",
    initialState: initialState,
    reducers: {
      setAllCurrencies: (state:any,action) => {
        state.listCurrencies = action.payload;
      },



    } 
 }); 

 export const { setAllCurrencies } = CurrenciesSlice.actions;

export default CurrenciesSlice.reducer; 


 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {

  // listCurrencies: {
  //   orderFirstDollar: {
  //     currencie: string,
  //     properties: {
  //       name: string,
  //       symbol:string
  //     }
  //   }[],
  //   orderFirstEuro: {
  //     currencie: string,
  //     properties: {
  //       name: string,
  //       symbol:string
  //     }
  //   }[]
  // }

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
    changeCurrencie: {
      fromName: "",
      toName: "",
      currenceFrom: "",
      currencieTo: ""
    }
  }
 }


 const CurrenciesSlice = createSlice({
    name: "currencies",
    initialState: initialState,
    reducers: {
      setAllCurrencies: (state:any,action) => {
        state.listCurrencies = action.payload;
      },
      setCurrenciesForChange: (state:any,action) => {
        state.listCurrencies.changeCurrencie = action.payload
      },
      changeCurrencies: (state:any) => {
        let change = state.listCurrencies.changeCurrencie
        change = {
          fromName: change.toName,
          toName: change.fromName,
          currenceFrom: change.currenceTo,
          currencieTo: change.currenceFrom
        }
        state.listCurrencies.changeCurrencie = change;
      }



    } 
 }); 

 export const { setAllCurrencies,setCurrenciesForChange, changeCurrencies } = CurrenciesSlice.actions;

export default CurrenciesSlice.reducer; 


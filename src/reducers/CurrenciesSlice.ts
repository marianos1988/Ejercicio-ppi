 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {
  listCurrencies: {
    orderFirstDollar: {
      currencie:string 
      properties: {
        name: string
        symbol:string
      }
    }[],
    orderFirstEuro:{
      currencie: string,
      properties: {
        name: string,
        symbol:string,
      }
    }[],
    changeFromToTo:{
      numberOption: string
      currencie: string,
      properties: {
        name: string,
        symbol:string,
      }
    },
    
  }
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
    changeFromToTo: {
      numberOption: "",
      currencie: "",
      properties: {
        name:"",
        symbol: ""
      }
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

      changeCurrencieFromToTo: (state:any, action) => {
        const value = action.payload;
        const currenciesAll = state.listCurrencies.orderFirstDollar;
        currenciesAll.forEach( (currencie: { currencie: any; properties: { name: any; symbol: any; }; }) =>{
          if(value.from === currencie.currencie) {
            state.listCurrencies.changeFromToTo = {
              currencie: currencie.currencie,
              properties: {
                name: currencie.properties.name,
                symbol: currencie.properties.symbol
              }
            }
          }
        }

        )
      }
    } 
 }); 

 export const { setAllCurrencies,changeCurrencieFromToTo } = CurrenciesSlice.actions;

export default CurrenciesSlice.reducer; 


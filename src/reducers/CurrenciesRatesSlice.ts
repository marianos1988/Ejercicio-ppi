 import { createSlice } from "@reduxjs/toolkit";

 type ListCurrencies = {
  listCurrencies: {
    currencie:string 
    properties: {
      name: string
      symbol:string
    }
  }[],
  listRates: {
    ratesFrom: {
      base: string,
      date: string,
      rates: {
        AUD: number,
        BGN: number,
        BRL: number,
        CAD: number,
        CHF: number,
        CNY: number,
        CZK: number,
        DKK: number,
        EUR: number,
        GBP: number,
        HKD: number,
        HUF: number,
        IDR: number,
        ILS: number,
        INR: number,
        ISK: number,
        JPY: number,
        KRW: number,
        MXN: number,
        MYR: number,
        NOK: number,
        NZD: number,
        PHP: number,
        PLN: number,
        RON: number,
        SEK: number,
        SGD: number,
        THB: number,
        TRY: number,
        USD: number,
        ZAR: number,
      }[]
    },
  },
  results: {
    allResults: {
      amount:any,
      from: string,
      to: string,
      totalTo: number,
      total: number,
      currencieFrom: string,
      currencieTo: string,
      currencieFromSimbol: string,
      currencieToSimbol: string
    }
  }
    }


 const initialState:ListCurrencies= {
  listCurrencies: [{
      currencie: "",
      properties: {
        name: "",
        symbol:"",
      }
    }],
  listRates: {
    ratesFrom: {
      base: "",
      date: "",
      rates: [{
        AUD: 0,
        BGN: 0,
        BRL: 0,
        CAD: 0,
        CHF: 0,
        CNY: 0,
        CZK: 0,
        DKK: 0,
        EUR: 0,
        GBP: 0,
        HKD: 0,
        HUF: 0,
        IDR: 0,
        ILS: 0,
        INR: 0,
        ISK: 0,
        JPY: 0,
        KRW: 0,
        MXN: 0,
        MYR: 0,
        NOK: 0,
        NZD: 0,
        PHP: 0,
        PLN: 0,
        RON: 0,
        SEK: 0,
        SGD: 0,
        THB: 0,
        TRY: 0,
        USD: 0,
        ZAR: 0,
      }],
    },
  },
  results: {
    allResults:    {
      amount: 1.00.toFixed(2),
      from: "USD - US Dolar",
      to: "EUR - Euro",
      totalTo: 0.9188642837452908,
      total: 0.9188642837452908,
      currencieFrom: "US Dolar",
      currencieTo: "Euro",
      currencieFromSimbol: "USD",
      currencieToSimbol: "EUR"
    }
  }

};

 const CurrenciesRatesSlice = createSlice({
    name: "currencies",
    initialState: initialState,
    reducers: {
      setAllCurrencies: (state:any,action) => {
        state.listCurrencies = action.payload;
      },
      setRatesFrom: (state,action) => {
        state.listRates.ratesFrom = action.payload;
      },
      setRatesTo: (state,action) =>{
        const rates:any = state.listRates.ratesFrom.rates;
        rates.forEach((rate: { currencie: any; rate: any; })=> {
          if(rate.currencie === action.payload) {
            state.results.allResults.totalTo = rate.rate;
            state.results.allResults.total = state.results.allResults.amount * state.results.allResults.totalTo;
          }

        });
      },
      setResultsAmount: (state, action) => {
        state.results.allResults.amount = action.payload
        state.results.allResults.total = state.results.allResults.amount * state.results.allResults.totalTo;
      },
      setResultsFrom: (state,action) => {
        const object = action.payload;
        state.results.allResults.from = `${object.currencie} - ${object.name}`;
        state.results.allResults.currencieFrom = object.name;
      },
      setResultsTo: (state,action) => {
        const object = action.payload;
        state.results.allResults.to = `${object.currencie} - ${object.name}`;
        state.results.allResults.currencieTo = object.name;
      },
      setCurrencieFromSimbol: (state,action) => {
        state.results.allResults.currencieFromSimbol = action.payload;
      },
      setCurrencieToSimbol: (state,action) => {
        state.results.allResults.currencieToSimbol = action.payload;
      },
      setAllResults: (state,action) => {

        const object = action.payload
        state.results.allResults.amount = object.amount;
        state.results.allResults.currencieFrom = object.currencieFrom;
        state.results.allResults.currencieFromSimbol = object.currencieFromSimbol;
        state.results.allResults.currencieTo = object.currencieTo;
        state.results.allResults.currencieToSimbol = object.currencieToSimbol;
        state.results.allResults.from = object.from;
        state.results.allResults.to = object.to;
        state.results.allResults.total = object.total;
        state.results.allResults.totalTo = object.totalTo;



      }

    } 
 }); 

 export const { setAllCurrencies, setRatesFrom, setRatesTo, setResultsAmount, setResultsFrom, setResultsTo, setCurrencieFromSimbol,setCurrencieToSimbol, setAllResults} = CurrenciesRatesSlice.actions;

export default CurrenciesRatesSlice.reducer; 


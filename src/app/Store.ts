import { configureStore } from "@reduxjs/toolkit"
import currenciesReducer from "../reducers/CurrenciesSlice"
import ratesSlice from "../reducers/RatesSlice"


export default configureStore({
    reducer: {
      currencies: currenciesReducer,
      rates: ratesSlice
    }
   })
   
   

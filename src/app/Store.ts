import { configureStore } from "@reduxjs/toolkit"
import currenciesReducer from "../reducers/CurrenciesRatesSlice"



export default configureStore({
    reducer: {
      currencies: currenciesReducer,
    }
   })
   
   

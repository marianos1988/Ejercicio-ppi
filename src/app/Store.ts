import { configureStore } from "@reduxjs/toolkit"
import currenciesReducer from "../reducers/CurrenciesSlice"


export default configureStore({
    reducer: {
      currencies: currenciesReducer,
    }
   })
   
   

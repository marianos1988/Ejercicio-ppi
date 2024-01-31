import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
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
    }
  },
  ratesTo: {
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
    }
  }
}

const initialState = {
  ratesFrom: {
    base: "",
    date: "",
    rates: {
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
    }
  },
  ratesTo: {
    base: "",
    date: "",
    rates: {
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
    }
  }
}

const RatesSlice = createSlice({

  name: "rates",
  initialState: initialState,
  reducers: {
    setRatesFrom: (state,action) => {
      state.ratesFrom = action.payload;
    },
    setRatesTo: (state,action) => {
      state.ratesTo = action.payload;
    }
  }
});

export const { setRatesFrom, setRatesTo } = RatesSlice.actions;
export default RatesSlice.reducer;
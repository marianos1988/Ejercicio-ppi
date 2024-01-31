import { useState } from "react"
import { useDispatch } from "react-redux";
import { setAllCurrencies } from "../reducers/CurrenciesSlice";
import { setRatesFrom, setRatesTo } from "../reducers/RatesSlice";
import { useUtils } from "./useUtils";

type InitialState = {
  amount: string,
  from: string,
  to: string
}

export const useCalculator = () => {

  const dispatch =  useDispatch();
  const { rightDate } = useUtils();


  const initialState:InitialState = {
    amount: "1.00",
    from: "USD - US Dolar", 
    to: "EUR - Euro"
  }

  const getFetchCurrencies = async () => {

    try {
      const JSONData = await fetch("https://api.vatcomply.com/currencies");
      const currencies = await JSONData.json();
      dispatch(setAllCurrencies(currencies));
    }
    catch (e) {
      console.log(e);
    }
  }

  const getFetchRates = async (base:string,fromORTo:string) => {

    try {
      const todayDate = new Date();
      const JSONData = await fetch(`https://api.vatcomply.com/rates?date=${rightDate(todayDate.getDate(),(todayDate.getMonth()+1),todayDate.getFullYear())}&base=${base}`);
      const rates = await JSONData.json();
      if(fromORTo === "from") {
        dispatch(setRatesFrom(rates));
      }
      else if(fromORTo === "to") {
        dispatch(setRatesTo(rates));
      }

    } 
    catch (e) {
      console.log(e)
    }

    

  }

  const [form, setForm] = useState(initialState)

  const handleChangeInput = (value:string) => {
    setForm({
      amount: value,
      from: form.from,
      to: form.to
    });

  }

  const handleChangeSelect = (value:string,fromOrTo: string) => {

    if(fromOrTo === "from") {
      setForm({
        amount: form.amount,
        from: value,
        to: form.to
      });
    }
    else if(fromOrTo === "to") {
      setForm({
        amount: form.amount,
        from: form.from,
        to: value
      });
    }

  }

  return {
    form,
    handleChangeInput,
    handleChangeSelect,
    getFetchCurrencies,
    getFetchRates
  }
}


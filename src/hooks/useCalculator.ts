import { useState } from "react"
import { useDispatch } from "react-redux";
import { setAllCurrencies } from "../reducers/CurrenciesSlice";
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

    const JSONData = await fetch("https://api.vatcomply.com/currencies");
    const currencies = await JSONData.json();
    dispatch(setAllCurrencies(currencies));
  }

  const getFetchRates = async (base:string) => {
    const JSONData = await fetch(`https://api.vatcomply.com/rates?date=${rightDate()}&base=${base}`);
    const rates = await JSONData.json();
    console.log(rates)
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


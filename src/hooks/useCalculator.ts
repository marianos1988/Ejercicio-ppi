import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setAllCurrencies } from "../reducers/CurrenciesSlice";
import { setRatesFrom } from "../reducers/RatesSlice";
import { useUtils } from "./useUtils";

type InitialState = {
  amount: number | string,
  from: string,
  to: string,
  totalTo: string
}

type Currencies = {
  forEach(arg0: (urrencie: any) => void): unknown;
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }[]
}

type Rates = {
  forEach(arg0: (rate: any) => void): unknown;
  currencie: string,
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
}


export const useCalculator = () => {

  const dispatch =  useDispatch();
  const { rightDate } = useUtils();
  const { listCurrencies } = useSelector((state:any) => state.currencies);
  const { ratesFrom } = useSelector((state:any) => state.rates);

  

  const initialState:InitialState = {
    amount: "1.00",
    from: "USD - US Dolar",
    to: "EUR - Euro",
    totalTo: "0.9247272054743851"
  }

  const  {orderFirstDollar, orderFirstEuro} = useUtils();

  const getFetchCurrencies = async () => {

    try {
      const JSONData = await fetch("https://api.vatcomply.com/currencies");
      const currencies = await JSONData.json();
      const arrayCurrencies = Object.entries(currencies).map(([currencie, properties]) => ({ currencie, properties }));

      const listCurrencies ={
        orderFirstDollar : orderFirstDollar(arrayCurrencies),
        orderFirstEuro: orderFirstEuro(arrayCurrencies)
      } 



      dispatch(setAllCurrencies(listCurrencies));

      setForm({
        amount: form.amount,
        from: `${listCurrencies.orderFirstDollar[0].currencie} - ${listCurrencies.orderFirstDollar[0].properties.name}`,
        to: `${listCurrencies.orderFirstEuro[0].currencie} - ${listCurrencies.orderFirstEuro[0].properties.name}`,
        totalTo: `${ratesFrom.rate[0].rate}`.toString().slice(0,5)
      })

    }
    catch (e) {
      console.log(e);
    }
  }

  const getFetchRates = async (base:string) => {

    try {
      const todayDate = new Date();
      const JSONData = await fetch(`https://api.vatcomply.com/rates?date=${rightDate(todayDate.getDate(),(todayDate.getMonth()+1),todayDate.getFullYear())}&base=${base}`);
      const rates = await JSONData.json();
      const arrayRates = Object.entries(rates.rates).map(([currencie, rate]) => ({ currencie,rate }));

      const newRates = {
        date: rates.date,
        base: rates.base,
        rates: arrayRates
      }
      dispatch(setRatesFrom(newRates));
    } 
    catch (e) {
      console.log(e);
    }

    

  }

  const [form, setForm] = useState(initialState)

  const handleChangeInput = (value:number) => {
    setForm({
      amount: value,
      from: form.from,
      to: form.to,
      totalTo: form.totalTo
    });

  }

  const handleChangeSelect = (value:string,fromOrTo: string) => {


    if(fromOrTo === "from") {
      listCurrencies.orderFirstDollar.forEach((currencie:any) => {
        
        if(value === currencie.currencie) {
          setForm({
            amount: form.amount,
            from: `${currencie.currencie} - ${currencie.properties.name}`,
            to: form.to,
            totalTo: form.totalTo
          });
        }
      })

    }
    else if(fromOrTo === "to") {
            listCurrencies.orderFirstDollar.forEach((currencie:any) => {
        
        if(value === currencie.currencie) {
          setForm({
            amount: form.amount,
            from: `${currencie.currencie} - ${currencie.properties.name}`,
            to: form.to,
            totalTo: form.totalTo
          });
        }
      })

    }
  }
  const handleChangeSelectTo = (value:string,fromOrTo: string) => {

    console.log(value);

            listCurrencies.orderFirstEuro.forEach((currencie:any) => {
        
        if(value === currencie.currencie) {
          setForm({
            amount: form.amount,
            from: form.from,
            to: `${currencie.currencie} - ${currencie.properties.name}`,
            totalTo: form.totalTo
          });
        }
      })

  }


  return {
    form,
    handleChangeInput,
    handleChangeSelect,
    handleChangeSelectTo,
    getFetchCurrencies,
    getFetchRates,

  }
}


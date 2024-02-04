import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setAllCurrencies, setRatesFrom, setRatesTo, setResultsAmount, setResultsFrom, setResultsTo, setCurrencieFromSimbol, setCurrencieToSimbol} from "../reducers/CurrenciesRatesSlice";
import { useUtils } from "./useUtils";

type InitialState = {

  amount: any
  from: string,
  to: string,
  totalTo: any
  total: number,
  currencieFrom: string
  currencieTo: string
  currencieFromSimbol: string,
  currencieToSimbol: string,


}


export const useCalculator = () => {

  const dispatch =  useDispatch();
  const { rightDate } = useUtils();
  const { listCurrencies } = useSelector((state:any) => state.currencies);

  const newListCurrencies = listCurrencies;



  

  const initialState:InitialState = {

    amount: (1.00).toFixed(2),
    from: "USD - US Dolar",
    to: "EUR - Euro",
    totalTo: (0.9188642837452908).toFixed(16),
    total: 0.9188642837452908,
    currencieFrom: "US Dolar",
    currencieTo: "Euro",
    currencieFromSimbol: "USD",
    currencieToSimbol: "EUR"
  }


  
  const [form, setForm] = useState(initialState);


  

  const getFetchCurrencies = async () => {

    try {
      const JSONData = await fetch("https://api.vatcomply.com/currencies");
      const currencies = await JSONData.json();
      const arrayCurrencies = Object.entries(currencies).map(([currencie, properties]) => ({ currencie, properties }));

   
      dispatch(setAllCurrencies(arrayCurrencies));

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




  const handleChangeInput = (value:number) => {

    dispatch(setResultsAmount(value))


  }


  const handleChangeSelectFrom = (value:string) => {

  
      newListCurrencies.forEach((currencie:any) => {

        if(value === currencie.currencie) {
          const object = {
            currencie: currencie.currencie,
            name: currencie.properties.name
          }
          dispatch(setResultsFrom(object));
          dispatch(setCurrencieFromSimbol(object.currencie));

        }
      })

  }

  const handleChangeSelectTo = (value:string) => {


    newListCurrencies.forEach((currencie:any) => {
    
    if(value == currencie.currencie) {
      const object = {
          currencie: currencie.currencie,
          name: currencie.properties.name
      }

      dispatch(setRatesTo(value));
      dispatch(setResultsTo(object))
      dispatch(setCurrencieToSimbol(object.currencie));



    }
  })

}



  return {
    form,
    handleChangeInput,
    handleChangeSelectFrom,
    handleChangeSelectTo,
    getFetchCurrencies,
    getFetchRates,

  }
}


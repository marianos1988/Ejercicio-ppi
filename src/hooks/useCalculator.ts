import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setAllCurrencies} from "../reducers/CurrenciesSlice";
import { setRatesFrom } from "../reducers/RatesSlice";
import { useUtils } from "./useUtils";

type InitialState = {

  amount: any
  from: string,
  to: string,
  totalTo: string
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
  const { ratesFrom } = useSelector((state:any) => state.rates);

  

  const initialState:InitialState = {

    amount: `1.00`,
    from: "USD - US Dolar",
    to: "EUR - Euro",
    totalTo: "0.9247272054743851",
    total: 0,
    currencieFrom: "US Dolar",
    currencieTo: "Euro",
    currencieFromSimbol: "USD",
    currencieToSimbol: "EUR"
  }


  
  const [form, setForm] = useState(initialState);

  const  {orderFirstDollar, orderFirstEuro} = useUtils();

  const getFetchCurrencies = async () => {

    try {
      const JSONData = await fetch("https://api.vatcomply.com/currencies");
      const currencies = await JSONData.json();
      const arrayCurrencies = Object.entries(currencies).map(([currencie, properties]) => ({ currencie, properties }));

      const listCurrencies ={
        orderFirstDollar : orderFirstDollar(arrayCurrencies),
        orderFirstEuro: orderFirstEuro(arrayCurrencies),
        changeFromToTo: {
          numberOption: "",
          currencie: "",
          properties: {
            name:"",
            symbol: ""
          }
        }
      } 



      dispatch(setAllCurrencies(listCurrencies));


      addTotal(form.amount,ratesFrom.rate[0].rate,`${listCurrencies.orderFirstDollar[0].currencie} - ${listCurrencies.orderFirstDollar[0].properties.name}`,`${listCurrencies.orderFirstEuro[0].currencie} - ${listCurrencies.orderFirstEuro[0].properties.name}`,listCurrencies.orderFirstDollar[0].properties.name,listCurrencies.orderFirstEuro[0].properties.name,listCurrencies.orderFirstDollar[0].currencie,listCurrencies.orderFirstEuro[0].currencie)



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
  const handleChangeInput = (value:string) => {

    addTotal(value,form.totalTo,form.from,form.to,form.currencieFrom,form.currencieTo,form.currencieFromSimbol,form.currencieToSimbol)
    

  }

  const handleChangeSelect = (value:string,fromOrTo: string) => {
    console.log(value)
    if(fromOrTo === "from") {
      listCurrencies.orderFirstDollar.forEach((currencie:any) => {

        if(value === currencie.currencie) {

          addTotal(form.amount,form.totalTo,currencie.properties.name,form.to,currencie.properties.name,form.currencieTo,value,form.currencieToSimbol)

        }
      })

    }
    else if(fromOrTo === "to") {
            listCurrencies.orderFirstDollar.forEach((currencie:any) => {

        if(value === currencie.currencie) {

          addTotal(form.amount,value,`${currencie.currencie} - ${currencie.properties.name}`,form.to,form.currencieFrom,currencie.properties.name,form.currencieFromSimbol,value)

        }
      })

    }
  }
  const handleChangeSelectTo = (value:string,_fromOrTo: string) => {


    listCurrencies.orderFirstEuro.forEach((currencie:any) => {
    
    if(value === currencie.currencie) {
      addTotal(form.amount,form.totalTo,form.from,`${currencie.currencie} - ${currencie.properties.name}`,form.currencieFrom,currencie.properties.name,form.currencieFromSimbol,value)

    }
  })

  }

  const addTotal = (amount:string, totalTo:string,from:string,to:string,currencieFrom:string,currencieTo:string,currencieFromSimbol:string,currencieToSimbol:string) => {
    let num1:number = parseFloat(amount);
    let num2:number= parseFloat(totalTo);
    let total:number= (num1*num2);


      setForm({

        amount:amount,
        from: to,
        to: from,
        totalTo: totalTo,
        total: total,
        currencieFrom: currencieTo,
        currencieTo: currencieFrom,
        currencieFromSimbol: currencieToSimbol,
        currencieToSimbol: currencieFromSimbol
  
      })
  }




  return {
    form,
    handleChangeInput,
    handleChangeSelect,
    handleChangeSelectTo,
    getFetchCurrencies,
    getFetchRates,
    addTotal,

  }
}


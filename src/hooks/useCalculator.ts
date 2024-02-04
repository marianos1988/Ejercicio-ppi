import { useDispatch, useSelector } from "react-redux";
import { setAllCurrencies, setRatesFrom, setRatesTo, setResultsAmount, setResultsFrom, setResultsTo, setCurrencieFromSimbol, setCurrencieToSimbol, setAllResults} from "../reducers/CurrenciesRatesSlice";
import { useUtils } from "./useUtils";



export const useCalculator = () => {

  const dispatch =  useDispatch();
  const { rightDate } = useUtils();
  const { listCurrencies } = useSelector((state:any) => state.currencies);


  const newListCurrencies = listCurrencies;



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


  const reverseResult = async (results: any )=> {
    const object = results;


    let objectEdit = {
      amount: object.amount,
      from: object.to,
      to: object.from,
      totalTo: object.totalTo,
      total: object.amount * object.totalTo,
      currencieFrom: object.currencieTo,
      currencieTo: object.currencieFrom,
      currencieFromSimbol: object.currencieToSimbol,
      currencieToSimbol: object.currencieFromSimbol
    }

      dispatch(setAllResults(objectEdit));
      // dispatch(setRatesTo(obj))


      dispatch(setRatesTo(object.currencieFromSimbol))



   





  }




  return {
    handleChangeInput,
    handleChangeSelectFrom,
    handleChangeSelectTo,
    getFetchCurrencies,
    getFetchRates,
    reverseResult,

  }
}


import { useEffect, useState } from "react"
import "../styles/Card.css"
import "../styles/Button.css"
import { Desc } from "./Desc"
import { DescDate } from "./DescDate"
import { InputField } from "./InputField"
import { ResultDisplay } from "./ResultDisplay"
import { SelectFieldFrom } from "./SelectFieldFrom"
import { useCalculator } from "../hooks/useCalculator" 
import { useSelector } from "react-redux"
import { SelectFieldTo } from "./SelectFieldTo"


export const Card = () => {

  const { form, handleChangeInput,handleChangeSelectTo, handleChangeSelect, getFetchCurrencies, getFetchRates} = useCalculator();
 
  const [change, setChange] = useState<{active:boolean,selectFrom:string,selectTo:string}>({
    active: false,
    selectFrom: "",
    selectTo: "",
    
  });

  useEffect(()=>{
    getFetchCurrencies();
    getFetchRates("USD");


  },[]);


  const { listCurrencies } = useSelector((state:any) => state.currencies);
  const { ratesFrom } = useSelector((state:any) => state.rates);


  return (
    <div className="card"> 
      <div className="rectangle-card">
        <div className="container-fields">
          <InputField
            text="Amount"
            inputValue = {form.amount}
            outputValue={handleChangeInput}

          />
          <SelectFieldFrom
            text="From"
            inputValue = {form.from}
            outputValue={(e)=>handleChangeSelect(e,"from")}
            currenciesFrom= {listCurrencies.orderFirstDollar}
            currenciesTo= {listCurrencies.orderFirstEuro}
            change= {change.active}
            selectTo= {change.selectTo}

          />
          <button className="btn-convert" onClick={()=>{setChange({active:!change.active,selectFrom:form.currencieFromSimbol,selectTo:form.currencieToSimbol})}}></button>
          <SelectFieldTo 
            text="To"
            inputValue={ratesFrom.rates}
            outputValue={(e)=>handleChangeSelect(e,"to")}
            outputCurrencie= {(e: string)=>{
              handleChangeSelectTo(e,"to")
            }}
            currenciesTo= {listCurrencies.orderFirstEuro}
            currenciesFrom={listCurrencies.orderFirstDollar}
            change={change.active}
            selectFrom={change.selectFrom}

          />
        </div>
        <ResultDisplay 
          textFrom={form.from}
          valueFrom={form.amount}
          textTo={form.to}
          valueTo={form.total}
        />
        <Desc />
        <DescDate
          date= {ratesFrom.date}
          time= {new Date()}
          currencieFrom={form.currencieFrom}
          currencieTo={form.currencieTo}
        />

      </div>
    </div>
  )
}
import { useEffect } from "react"
import "../styles/Card.css"
import { Button } from "./Button"
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
            currencies= {listCurrencies.orderFirstDollar}
          />
          <Button
          form= {form}
          ></Button>
          <SelectFieldTo 
            text="To"
            inputValue={ratesFrom.rates}
            outputValue={(e)=>handleChangeSelect(e,"to")}
            outputCurrencie = {(e: string)=>{handleChangeSelectTo(e,"to")}}
            currencies= {listCurrencies.orderFirstEuro}
          />
        </div>
        <ResultDisplay 
          textFrom={form.from}
          valueFrom={form.amount}
          textTo={form.to}
          valueTo={form.totalTo}
        />
        <Desc />
        <DescDate
          date= {ratesFrom.date}
          time= {new Date()}
        />

      </div>
    </div>
  )
}
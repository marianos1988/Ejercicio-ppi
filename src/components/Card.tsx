import { useState,useEffect } from "react"
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


type Props = {}

export const Card = (props: Props) => {

  const { form, handleChangeInput, handleChangeSelect, getFetchCurrencies, getFetchRates} = useCalculator();

  useEffect(()=>{getFetchCurrencies()},[]);
  getFetchRates("USD");
  const { currencies } = useSelector((state:any) => state.currencies);



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
            currencies= {currencies}
          />
          <Button
          form= {form}
          ></Button>
          <SelectFieldTo 
            text="To"
            inputValue={form.to}
            outputValue={(e)=>handleChangeSelect(e,"to")}
            currencies= {currencies}
          />
        </div>
        <ResultDisplay 
          textFrom={"Euro"}
          valueFrom={1.00}
          textTo={"Dolar"}
          valueTo={1.0627}
        />
        <Desc />
        <DescDate />

      </div>
    </div>
  )
}
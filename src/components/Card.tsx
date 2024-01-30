import { useState } from "react"
import "../styles/Card.css"
import { Button } from "./Button"
import { Desc } from "./Desc"
import { DescDate } from "./DescDate"
import { InputField } from "./InputField"
import { ResultDisplay } from "./ResultDisplay"
import { SelectField } from "./SelectField"
import { useCalculator } from "../hooks/useCalculator"
type Props = {}

export const Card = (props: Props) => {

  const { form, handleChangeInput, handleChangeSelect} = useCalculator();
  
  return (
    <div className="card"> 
      <div className="rectangle-card">
        <div className="container-fields">
          <InputField 
            text="Amount"
            inputValue = {form.amount}
            outputValue={handleChangeInput}
          />
          <SelectField 
            text="From"
            inputValue = {form.from}
            outputValue={(e)=>handleChangeSelect(e,"from")}
          />
          <Button
          form= {form}
          ></Button>
          <SelectField 
            text="To"
            inputValue={form.to}
            outputValue={(e)=>handleChangeSelect(e,"to")}
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
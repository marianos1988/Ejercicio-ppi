import { useCalculator } from "../hooks/useCalculator"
import { Dispatch } from "@reduxjs/toolkit"

import "../styles/Fields.css"
import { useDispatch } from "react-redux"

type Props = {
  text: string
  inputValue: string,
  outputValue: (e:string) => void
  currencies: any
}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }
}

export const SelectFieldFrom = ({ text, inputValue, outputValue, currencies }: Props) => {

  const dispatch = useDispatch();
const { getFetchRates } = useCalculator();

const handleChange = (e:any) => {

  getFetchRates(e.target.value);
  return outputValue(e.target.value)
} 

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" className="select-field" onChange={handleChange}>
        { 
          (currencies.length ===0)
            ? (<option value={""}>{"-----"}</option>)
            : (
              currencies.map((currencie:Currencie)=>(
                <option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>
              ))
            )
        }
      </select>
    </div>
  )
}
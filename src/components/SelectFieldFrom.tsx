import { useCalculator } from "../hooks/useCalculator"

import "../styles/Fields.css"
type Currencies = {
  forEach(arg0: any): import("react").ReactNode
  length: number
  map(arg0: (currencie: Currencie) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }[],

}

type Props = {
  text: string
  inputValue: string,
  outputValue: (e:string) => void
  currenciesFrom: any
  currenciesTo: Currencies
  selectTo: string
  firstSelectFrom: {
    currencie: string,
    currencieFrom: string
  }

}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  },

}

export const SelectFieldFrom = ({ text, outputValue, currenciesFrom, firstSelectFrom}: Props) => {

  console.log(firstSelectFrom)

const { getFetchRates } = useCalculator();




const handleChange = async (e:any) => {

  await getFetchRates(e.target.value);
  return outputValue(e.target.value);
} 

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" id="select-from" className="select-field" onChange={handleChange}>
        {
          (currenciesFrom.length === 0)
            ? (<option value={""}>{"-----"}</option>)
            : (   
                currenciesFrom.map((currencie:any)=>(
                  (currencie.currencie === firstSelectFrom.currencie)
                    ? (<option key={firstSelectFrom.currencie} value={firstSelectFrom.currencie} selected>{firstSelectFrom.currencieFrom}</option>)
                    : ((<option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>))
                ))
                
              )
        }

      </select>
    </div>
  )
}
import { useCalculator } from "../hooks/useCalculator"
import "../styles/Fields.css"
type Currencies = {
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
  currenciesFrom: Currencies
  currenciesTo: Currencies
  change: boolean
  selectTo: string

}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  },

}

export const SelectFieldFrom = ({ text, outputValue, currenciesFrom, currenciesTo, change, selectTo}: Props) => {


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
            : (change) 
              ? (

                  currenciesTo.map((currencie:Currencie)=>(
                    (currencie.currencie === selectTo)
                     ? (
                      <option key={currencie.currencie} value={currenciesFrom.currencie} selected>{currencie.properties.name}</option>
                     )
                     : (
                      <option key={currencie.currencie} value={currenciesFrom.currencie}>{currencie.properties.name}</option>
                     )
                ))
                
              )
              : (
                  currenciesFrom.map((currencie:Currencie)=>(
                    <option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>
              
                  ))  
              
                )
                
              

        }
      </select>
    </div>
  )
}
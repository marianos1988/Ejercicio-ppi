

import "../styles/Fields.css"
type Currencies = {
  forEach(arg0: (currencie: any) => false | import("react/jsx-runtime").JSX.Element): unknown
  map(arg0: (currencie: Currencie) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode
  length: number
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }[]
}

type Props = {
  text: string
  inputValue: any,
  outputValue: (e:string) => void
  currenciesTo:any,
  currenciesFrom: Currencies
  outputCurrencie: any
  selectFrom: string
  firstSelectTo: {
    currencie: string,
    currencieTo: string
  }

}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }
}

export const SelectFieldTo = ({ text, inputValue, outputValue, currenciesTo, outputCurrencie, firstSelectTo }: Props) => {


const handleChange = (e:any) => {
  
  outputCurrencie(e.target.value)

  for(let ele in inputValue) {
    if(inputValue[ele].currencie === e.target.value) {
 
      outputValue(inputValue[ele].rate);

    }
  }

} 

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" id="select-to" className="select-field" onChange={handleChange}>
      {
          (currenciesTo.length === 0)
            ? (<option value={""}>{"-----"}</option>)
            : (   
                currenciesTo.map((currencie:any)=>(
                  (currencie.currencie === firstSelectTo.currencie)
                    ? (<option key={firstSelectTo.currencie} value={firstSelectTo.currencie} selected>{firstSelectTo.currencieTo}</option>)
                    : (<option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>)
                ))
                
              )
        }
      </select>
    </div>
  )
}
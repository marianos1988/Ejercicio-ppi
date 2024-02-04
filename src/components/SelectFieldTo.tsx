

import "../styles/Fields.css"
type Currencies = {
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
  currenciesTo: Currencies,
  currenciesFrom: Currencies
  outputCurrencie: any
  change: boolean
  selectFrom: string

}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }
}

export const SelectFieldTo = ({ text, inputValue, outputValue, currenciesTo,currenciesFrom, outputCurrencie, change, selectFrom }: Props) => {


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
            : (change)
                ? ( 
                    currenciesFrom.map((currencie:Currencie)=>(

                      (currencie.currencie === selectFrom) 
                        ? (
                            <option key={currencie.currencie} value={currencie.currencie} selected>{currencie.properties.name}</option>
                          ) 
                        : (
                            <option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>
                          )
                )))
                : 
                 (
                    currenciesTo.map((currencie:Currencie)=>(
                      (currencie.currencie === "EUR")
                        ? (
                          <option key={currencie.currencie} value={currencie.currencie} selected>{currencie.properties.name}</option>
                        )
                        : (
                          <option key={currencie.currencie} value={currencie.currencie}>{currencie.properties.name}</option>
                        )

                )))
                       
        }
      </select>
    </div>
  )
}
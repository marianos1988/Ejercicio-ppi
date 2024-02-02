
import "../styles/Fields.css"

type Props = {
  text: string
  inputValue: any,
  outputValue: (e:string) => void
  currencies: any,
  outputCurrencie: any
}

type Currencie = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }
}

export const SelectFieldTo = ({ text, inputValue, outputValue, currencies, outputCurrencie }: Props) => {
  

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
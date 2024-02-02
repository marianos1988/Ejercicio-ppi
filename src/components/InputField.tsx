
import { useState } from "react"
import { useUtils } from "../hooks/useUtils"
import "../styles/Fields.css"


type Props = {
  text: string,
  inputValue: number | string,
  outputValue: (value:any) => void,


}

export const InputField = ({ text, inputValue, outputValue }: Props) => {

  const [error, setError] = useState(false);
  const {validateOnlyNumbers} = useUtils();



  const handleChangeAmount = (e:React.ChangeEvent<HTMLInputElement>) => {

    const value = (e.target.value);
    if(validateOnlyNumbers(value)) {
      setError(true);

    }
    else (
      
      setError(false)

    )
    

    return outputValue(value)
  }

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <input type="number" step="0.01" className='input-field' placeholder="Enter amount" onChange={(e)=> handleChangeAmount(e)} value={inputValue} />
      <div className={(error) ? `validate-display error-active` : `validate-display`}>Incorrect value!</div>
    </div>
  )
}
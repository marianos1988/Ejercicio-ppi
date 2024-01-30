
import "../styles/Fields.css"

type Props = {
  text: string
  inputValue: string,
  outputValue: (value:string) => void

}

export const InputField = ({ text, inputValue, outputValue }: Props) => {



  const handleChangeAmount = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target.value)
    return outputValue(value)
  }

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <input type="text" className='input-field' placeholder="Enter amount" onChange={(e)=> handleChangeAmount(e)} value={inputValue} />
    </div>
  )
}
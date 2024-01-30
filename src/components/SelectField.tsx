import "../styles/Fields.css"

type Props = {
  text: string
  inputValue: string,
  outputValue: (e:string) => void
}

export const SelectField = ({ text, inputValue, outputValue }: Props) => {

const handleChange = (e:any) => {

  return outputValue(e.target.value)
} 

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" className="select-field" onChange={handleChange}>
        <option value={inputValue}>{inputValue}</option>
        <option value={"Dollar"}>Dollar</option>
      </select>
    </div>
  )
}
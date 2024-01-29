import "../styles/Fields.css"

type Props = {
  text: string
}

export const SelectField = ({ text }: Props) => {
  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" className="select-field">
        <option value={"Euro"}>Euro</option>
        <option value={"Dollar"}>Dollar</option>
      </select>
    </div>
  )
}
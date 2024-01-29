import "../styles/Fields.css"

type Props = {
  text: string

}

export const InputField = ({text}: Props) => {


  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <input type="text" className='input-field' placeholder="Enter amount" value={1.00} />
    </div>
  )
}
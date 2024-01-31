import "../styles/Fields.css"

type Props = {
  text: string
  inputValue: string,
  outputValue: (e:string) => void
  currencies: any
}

export const SelectFieldTo = ({ text, inputValue, outputValue, currencies }: Props) => {

const handleChange = (e:any) => {

  return outputValue(e.target.value)
} 

  return (
    <div className='box-field'>
      <label className='box-text'>{text}</label>
      <select name="type-convertion" className="select-field" onChange={handleChange}>
        {
          (currencies.USD.name === "") 
            ? (
                <option value={inputValue}>-------</option>
              )
            : (
                <>
                  <option value={inputValue}>{currencies.EUR.name}</option>
                  <option value={inputValue}>{currencies.USD.name}</option>
                  <option value={inputValue}>{currencies.JPY.name}</option>
                  <option value={inputValue}>{currencies.BGN.name}</option>
                  <option value={inputValue}>{currencies.CZK.name}</option>
                  <option value={inputValue}>{currencies.DKK.name}</option>
                  <option value={inputValue}>{currencies.GBP.name}</option>
                  <option value={inputValue}>{currencies.HUF.name}</option>
                  <option value={inputValue}>{currencies.PLN.name}</option>
                  <option value={inputValue}>{currencies.RON.name}</option>
                  <option value={inputValue}>{currencies.SEK.name}</option>
                  <option value={inputValue}>{currencies.CHF.name}</option>
                  <option value={inputValue}>{currencies.ISK.name}</option>
                  <option value={inputValue}>{currencies.HRK.name}</option>
                  <option value={inputValue}>{currencies.RUB.name}</option>
                  <option value={inputValue}>{currencies.TRY.name}</option>
                  <option value={inputValue}>{currencies.AUD.name}</option>
                  <option value={inputValue}>{currencies.BRL.name}</option>
                  <option value={inputValue}>{currencies.CAD.name}</option>
                  <option value={inputValue}>{currencies.CNY.name}</option>
                  <option value={inputValue}>{currencies.HKD.name}</option>
                  <option value={inputValue}>{currencies.IDR.name}</option>
                  <option value={inputValue}>{currencies.ILS.name}</option>
                  <option value={inputValue}>{currencies.INR.name}</option>
                  <option value={inputValue}>{currencies.KRW.name}</option>
                  <option value={inputValue}>{currencies.MXN.name}</option>
                  <option value={inputValue}>{currencies.MYR.name}</option>
                  <option value={inputValue}>{currencies.NZD.name}</option>
                  <option value={inputValue}>{currencies.PHP.name}</option>
                  <option value={inputValue}>{currencies.SGD.name}</option>
                  <option value={inputValue}>{currencies.THB.name}</option>
                  <option value={inputValue}>{currencies.ZAR.name}</option>
                </>
              )
        }
      </select>
    </div>
  )
}
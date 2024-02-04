import "../styles/ResultDisplay.css"

type Props = {
  valueFrom: number | string,
  textFrom: string,
  valueTo: number,
  textTo: string
}

export const ResultDisplay = ({ valueFrom, textFrom, valueTo, textTo}: Props) => {

  return (
    <>
      <div className="container-result-display">
        <div className='value-display'>
          <p>{`${valueFrom} ${textFrom} =`}</p><br />
          <p>{`${valueTo.toFixed(10)} ${textTo}`}</p>
        </div>
        <div className="reverse-value-display">
          <p>{`${valueTo} ${textFrom} = ${valueFrom} ${textFrom}`}</p>
        </div>
      </div>
    </>

    
  )
}
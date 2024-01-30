import "../styles/ResultDisplay.css"

type Props = {
  valueFrom: number,
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
          <p>{`${valueTo} ${textTo}`}</p>
        </div>
        <div className="reverse-value-display">
          <p>{`${valueTo} ${textTo} = ${valueFrom} ${textFrom}`}</p>
        </div>
      </div>
    </>

    
  )
}
import "../styles/Card.css"
import { Button } from "./Button"
import { InputField } from "./InputField"
import { ResultDisplay } from "./ResultDisplay"
import { SelectField } from "./SelectField"
type Props = {}

export const Card = (props: Props) => {
  return (
    <div className="card"> 
      <div className="rectangle-card">
        <div className="container-fields">
          <InputField 
            text="Amount" 
          />
          <SelectField 
            text="From"
          />
          <Button></Button>
          <SelectField 
            text="To"
          />
        </div>
        <ResultDisplay 
          textFrom={"Euro"}
          valueFrom={1.00}
          textTo={"Dolar"}
          valueTo={1.0627}
        />

      </div>
    </div>
  )
}
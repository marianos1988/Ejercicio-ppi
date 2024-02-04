import { useCalculator } from "../hooks/useCalculator"
import "../styles/Button.css"

export const Button = () => {

  const {handleOnClick} = useCalculator()
  return (
    <button className='btn-convert' onClick={handleOnClick}></button>
  )
}
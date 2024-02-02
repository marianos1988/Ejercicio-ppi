import { useUtils } from "../hooks/useUtils";
import "../styles/DescDate.css";

type props = {
  date:string,
  time: Date,
  currencieFrom: string,
  currencieTo: string
}

export const DescDate = ({ date,time,currencieFrom, currencieTo }:props) => {

  const { detectMonth } = useUtils();
  const h = time.getHours();
  const m = time.getMinutes();
  const month = detectMonth(date.slice(5,7))
  return (
    <div className="container-desc-date">
      <div className="desc-date">
        <p>{currencieFrom}</p> to <p>{currencieTo}</p> conversion — Last updated {month} {date.slice(8,10)}, {date.slice(0,4)}, {h}:{m} UTC
      </div>
    </div>
  )
}
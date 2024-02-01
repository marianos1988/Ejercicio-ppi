import { useUtils } from "../hooks/useUtils";
import "../styles/DescDate.css";

type props = {
  date:string,
  time: Date
}

export const DescDate = ({ date,time }:props) => {

  const { detectMonth } = useUtils();
  const h = time.getHours();
  const m = time.getMinutes();
  const month = detectMonth(date.slice(5,7))
  return (
    <div className="container-desc-date">
      <div className="desc-date">
        <p>Euro</p> to <p>US Dollar</p> conversion — Last updated {month} {date.slice(8,10)}, {date.slice(0,4)}, {h}:{m} UTC
      </div>
    </div>
  )
}
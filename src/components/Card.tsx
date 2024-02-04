import { useEffect, useState } from "react"
import "../styles/Card.css"
import "../styles/Button.css"
import { Desc } from "./Desc"
import { DescDate } from "./DescDate"
import { InputField } from "./InputField"
import { ResultDisplay } from "./ResultDisplay"
import { SelectFieldFrom } from "./SelectFieldFrom"
import { useCalculator } from "../hooks/useCalculator" 
import { useSelector } from "react-redux"
import { SelectFieldTo } from "./SelectFieldTo"


export const Card = () => {

  const { form, handleChangeInput,handleChangeSelectTo, handleChangeSelectFrom, getFetchCurrencies, getFetchRates} = useCalculator();
  const { listCurrencies } = useSelector((state:any) => state.currencies);
  const { allResults } = useSelector((state:any) => state.currencies.results);
  const { ratesFrom } = useSelector((state:any) => state.currencies.listRates);
  
  const [change, setChange] = useState(false);

  useEffect(()=>{
    getFetchCurrencies();
    getFetchRates("USD");
  },[]);


  return (
    <div className="card"> 
      <div className="rectangle-card">
        <div className="container-fields">
          <InputField
            text="Amount"
            inputValue = {allResults.amount}
            outputValue={handleChangeInput}

          />
          <SelectFieldFrom
            text="From"
            inputValue = {allResults.from}
            outputValue={(e)=>handleChangeSelectFrom(e)}
            currenciesFrom= {listCurrencies}
            currenciesTo= {listCurrencies}
            change= {change}
            selectTo= {allResults.currencieToSimbol}

          />
          <button className="btn-convert" onClick={async ()=>{

            await getFetchRates(allResults.currencieToSimbol);
             setChange(!change)

            handleChangeSelectTo(allResults.currencieToSimbol)


            }}
          />
          <SelectFieldTo 
            text="To"
            inputValue={listCurrencies.rates}
            outputValue={(e)=>handleChangeSelectTo(e)}
            outputCurrencie= {(e: string)=>{
              handleChangeSelectTo(e)
            }}
            currenciesTo= {listCurrencies}
            currenciesFrom={listCurrencies}
            change={change}
            selectFrom={allResults.currencieFromSimbol}

          />
        </div>
        <ResultDisplay 
          textFrom={allResults.from}
          valueFrom={allResults.amount}
          textTo={allResults.to}
          valueTo={allResults.total}
        />
        <Desc />
        <DescDate
          date= {ratesFrom.date}
          time= {new Date()}
          currencieFrom={allResults.currencieFrom}
          currencieTo={allResults.currencieTo}
        />

      </div>
    </div>
  )
}
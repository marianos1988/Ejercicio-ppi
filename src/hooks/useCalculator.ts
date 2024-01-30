import { useState } from "react"

type InitialState = {
  amount: string,
  from: string,
  to: string
}

export const useCalculator = () => {

  const initialState:InitialState = {
    amount: "1.00",
    from: "USD - US Dolar", // cambiar con el fetch recibido
    to: "EUR - Euro"
  }

  const [form, setForm] = useState(initialState)

  const handleChangeInput = (value:string) => {
    setForm({
      amount: value,
      from: form.from,
      to: form.to
    });

  }

  const handleChangeSelect = (value:string,fromOrTo: string) => {

    if(fromOrTo === "from") {
      setForm({
        amount: form.amount,
        from: value,
        to: form.to
      });
    }
    else if(fromOrTo === "to") {
      setForm({
        amount: form.amount,
        from: form.from,
        to: value
      });
    }

  }

  return {
    form,
    handleChangeInput,
    handleChangeSelect
  }
}
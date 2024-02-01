
type Currencies = {
  currencie: string,
  properties: {
    name: string,
    symbol: string
  }[]
}

export const useUtils = () => {

  const rightDate = (date:number,month:number, year:number) => {

    const addZero = (number:number) => {
      if(number < 10) {
        return `0${number}`
      }
      return number;
    }
    const rightDate = `${year}-${addZero(month)}-${addZero(date)}`;
    
    return rightDate;

  }

const  validateOnlyNumbers= (num:any) => {
  
    for(let digit in num){
        
        if((num[digit] >= 0) && (num[digit] <= 9) || num === ",") {
            return false;
        }
        else {

          return true;
        }
    }
  }

  const orderFirstDollar = (currencies:any)=> {
    let newListCurrencies = [];
    const firstCurrencie = currencies.filter((currencie: { currencie: string })=>currencie.currencie === "USD");
    newListCurrencies.push(firstCurrencie[0]);
    currencies.forEach((currencie: { currencie: string })=>{
      if(currencie.currencie !== "USD") {
        newListCurrencies.push(currencie);
      }
    });
    
    return newListCurrencies;
  }

  const orderFirstEuro = (currencies:any)=> {
    let newListCurrencies = [];
    const firstCurrencie = currencies.filter((currencie: { currencie: string })=>currencie.currencie === "EUR");
    newListCurrencies.push(firstCurrencie[0]);
    currencies.forEach((currencie: { currencie: string })=>{
      if(currencie.currencie !== "EUR") {
        newListCurrencies.push(currencie);
      }
    });
    
    return newListCurrencies;
  }

  const detectMonth = (month:string) => {
    switch (month) {
      case "01": return "Jan";
      case "02": return "Feb";
      case "03": return "Mar";
      case "04": return "Apr";
      case "05": return "May";
      case "06": return "Jun";
      case "07": return "Jul";
      case "08": return "Aug";
      case "09": return "Sep";
      case "10": return "Oct";
      case "11": return "Nov";
      case "12": return "Dec";


    }
  }


  return {
    rightDate,
    validateOnlyNumbers,
    orderFirstDollar,
    orderFirstEuro,
    detectMonth

  }
}
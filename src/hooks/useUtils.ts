

export const useUtils = () => {

  const rightDate = (date:number,month:number, year:number) => {

    const addZero = (number:number) => {
      if(number < 10) {
        return `0${number}`
      }
      return number;
    }
    const rightDate = `${year}-${addZero(month)}-${addZero(date)}`;
    // const todayDate = new Date();
    // const rightDate = `${todayDate.getFullYear()}-${addZero(todayDate.getMonth()+1)}-${addZero(todayDate.getDate())}`;
    
    return rightDate;

  }

  return {
    rightDate
  }
}
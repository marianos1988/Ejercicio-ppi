

export const useUtils = () => {

  const rightDate = () => {

    const addZero = (number:number) => {
      if(number < 10) {
        return `0${number}`
      }
      return number;
    }
    const todayDate = new Date();
    const rightDate = `${todayDate.getFullYear()}-${addZero(todayDate.getMonth()+1)}-${addZero(todayDate.getDate())}`;
  
    return rightDate;

  }

  return {
    rightDate
  }
}
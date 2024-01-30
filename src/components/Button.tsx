import "../styles/Button.css"

export const Button = (form:any) => {
  return (
    <button className='btn-convert' onClick={()=>{console.log(form)}}></button>
  )
}
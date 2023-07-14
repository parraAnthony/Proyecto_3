import { useEffect, useState } from 'react'
import Location from './Components/Location'
import ResidentInfo from './Components/ResidentInfo'
import axios from 'axios'
import './App.css'

function App() {
  const [id, setId] = useState(`https://rickandmortyapi.com/api/location/${parseInt(Math.random()*(126-1)+1)}`)
  const [data, setData] = useState({})
  const [resident, setResidents] = useState([])
  const [selectd, changeSelectd] =useState(true)
  useEffect(()=>{
    axios
    .get(id)
    .then(res => (
      setData(res.data),
      url(res.data)))
    .catch(error => alert(error))
  
  },[id])
  
  const url =(element)=>{

    const array = element.residents?.map(arr=>{
        return arr.slice(42)
      })

     const a = array?.toString()

      if(element.residents.length>0){
        api(`https://rickandmortyapi.com/api/character/${a}`)  
      }else{
        changeSelectd(false)
      }
  }
const api =(url)=>{

  axios
      .get(url)
      .then(res => {
        if(res.data.length){
          setResidents(res.data)
        }else{
          setResidents([res.data])
        }
      })
      .catch(err=>alert("residents "+err))
} 
  const form =(e)=>{
    if(e<127&&e>0){
      setId(`https://rickandmortyapi.com/api/location/${e}`)
      changeSelectd(true)
    }else{
      alert("No existe la locations insertada")
    }
    
  }
  return (
    <>
      <div>
        <img className="header" src="/logo.svg" alt="" />
      </div>
      <h1>Locations</h1>
      <main className='components__container'>
        <form onSubmit={e => {
          e.preventDefault()
          form(e.target.input.value)
        }}>
          <label htmlFor="input">Find Locations </label>
          <input type="text" id='input' name="input" placeholder='Enter ID' />
          <button type='submit'>Search</button>
        </form>
        <Location source={data}/> 
        <ResidentInfo source={resident} selectd={selectd}/>  
      </main>
      
    </>
  )
}

export default App

import './App.css'
import { useContext, useEffect } from 'react'
import { NasaAPIContext } from './context/NasaAPIContext.jsx'
import Map from './components/Map.jsx'

function App() {

  const [APOD, setAPOD] = useContext(NasaAPIContext)

  return (

  <>
      <h1 className=' text-3xl font-bold mt-16 mb-10 '>Bienvenue sur le site de tracker d'ISS</h1>

    <Map/>


  {APOD &&
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
    <h2 className='text-2xl font-bold mt-10 mb-5 col-span-2'>Image du Jour </h2>
      <img className='w-full col-span-1' src={APOD.hdurl} />
      <p className='w-full col-span-1'>{APOD.explanation}</p>

    </div>
    }
  </>
  )
}

export default App

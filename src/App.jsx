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

  <h2 className='text-2xl font-bold mt-10 mb-5'>Qu'est ce que l'ISS ?</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-blue-950/75 rounded-lg'>
<img src="https://images-assets.nasa.gov/image/jsc2021e064215_alt/jsc2021e064215_alt~large.jpg?w=1920&h=1173&fit=clip&crop=faces%2Cfocalpoint" alt="image de l'ISS"  className=' p-4'/>
  <p className=' rounded-lg p-4 py-5'>
    Five partner agencies, the Canadian Space Agency, the European Space Agency, the Japan Aerospace Exploration Agency, the National Aeronautics and Space Administration, and the State Space Corporation “Roscosmos”, operate the International Space Station, with each partner responsible for managing and controlling the hardware it provides. The station was designed from the outset to be interdependent and relies on contributions from across the partnership to function. <strong>The International Space Station (ISS)</strong> is the unique blend of unified and diversified goals among the world’s space agencies that will lead to improvements in life on Earth for all people of all nations. While the various space agency partners may emphasize different aspects of research to achieve their goals in the use of the ISS, they are unified in several important overarching goals. All of the agencies recognize the importance of leveraging the ISS as an education platform to encourage and motivate today’s youth to pursue careers in math, science, engineering, and technology (STEM): educating the children of today to be the leaders and space explorers of tomorrow.</p>
    <p className=' rounded-lg p-4 py-5 col-span-2'> All the agencies are unified in their goals to apply knowledge gained through ISS research in human physiology, radiation, materials science, engineering, biology, fluid physics, and technology: enabling future space exploration missions.
    Advancing our knowledge in the areas of human physiology, biology, and material and physical sciences and translating that knowledge to health, socioeconomic, and environmental benefits on
    Earth is another common goal of the agencies: returning the knowledge gained in space research for the benefit of society.
    The ISS program’s greatest accomplishment is as much a human achievement as a technological one. The global partnership of space agencies exemplifies meshing of cultural differences and political intricacies to plan, coordinate, provide, and operate the complex elements of the ISS. The program also brings together international flight crews and globally distributed launch, operations, training, engineering, communications networks, and scientific research communities.
  </p>
  </div>
  {APOD &&
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
    <h2 className='text-2xl font-bold mt-10 mb-5 col-span-2'>Image du Jour </h2>
      <img className='w-full col-span-1' src={APOD.hdurl} />
      <p className='w-full col-span-1 bg-blue-950/75 rounded-lg p-4 align-middle'>{APOD.explanation}</p>

    </div>
    }
  </>
  )
}

export default App

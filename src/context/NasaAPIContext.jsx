import { createContext, useState, useEffect } from "react"
import axios from 'axios'

const DEMO_KEY = 'RijOKsdEksSqci2XfmnlahxHMstPOchh46FCF2dP'

export const NasaAPIContext = createContext(null)

export const NasaAPIController = ({children}) => {

    const [APOD, setAPOD] = useState(null)
    const [ISSInfo, setISSInfo] = useState(null)

    const fetchAPOD = async () => {
        try {
            const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`)

            if(response.status === 200){
                setAPOD(response.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

        useEffect(()=> {
            fetchAPOD()

        },[])


    return(
        <NasaAPIContext.Provider value={[APOD,setAPOD, ISSInfo,setISSInfo]}>
            {children}
        </NasaAPIContext.Provider>
    )
}

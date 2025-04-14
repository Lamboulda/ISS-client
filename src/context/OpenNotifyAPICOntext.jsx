import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const OpenNotifyAPIContext = createContext()

export const OpenNotifyAPIController = ({children}) => {
    const [ISSPosition, setISSPosition] = useState(null)

    const fetchISSPosition = async ()=> {
        try {
            const response = await axios.get(`http://api.open-notify.org/iss-now.json`)
            if(response.status === 200){
                setISSPosition(response.data.iss_position)
            }
        }  catch (error) {
            console.log(error)
        }
    }

        useEffect(()=> {
            fetchISSPosition()
            const hourInterval = setInterval(()=>{
                fetchISSPosition()
            },3600000)

            // return () => clearInterval(hourInterval)
        }, [])


    return(
        <OpenNotifyAPIContext.Provider value={[ISSPosition, setISSPosition]}>
            {children}
        </OpenNotifyAPIContext.Provider>
    )
}
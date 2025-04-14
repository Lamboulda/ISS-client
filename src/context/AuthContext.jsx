import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'

export const AuthContext = createContext(null)

export const AuthController = ({ children }) => {
    let navigate = useNavigate()
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
      const token = localStorage.getItem('token')
      if (token) {
        setIsAuthenticated(true)
      }
    }, [])

    const handleLogout = () => {
      try{
        localStorage.removeItem('token')
        setIsAuthenticated(false)
        //console.log(isAuthenticated)
        navigate('/')
      }
      catch(err){
        alert(err)
      }

    }

    const handleLogin = async (e, infoUser) => {
        e.preventDefault()
        console.log(infoUser)
        try{
          const response = await axios.post('http://localhost:3000/api/login',
            infoUser)

          if(response.status === 200){
            localStorage.setItem('token', response.data.token)
            setIsAuthenticated(true)
            alert(response.data.message)
            navigate('/')
          }
        }
        catch(err){
            alert(err.response.data.message)
        }

      }

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}
import { Route, Routes, Navigate,  } from "react-router"
import { useContext } from "react"
import App from "./App.jsx"
import NavBar from "./components/NavBar"
import Login from "./pages/Login"
import { AuthContext } from "./context/AuthContext"
import Register from "./pages/Register.jsx"
const MyRouter = () => {

    const {isAuthenticated} = useContext(AuthContext)
    return(
        <>

            <NavBar />
            <Routes >
                    <Route path="/" element={<App />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path='*' element={<p>404 Not found</p>}/>
            </Routes>
    </>)
}

export default MyRouter
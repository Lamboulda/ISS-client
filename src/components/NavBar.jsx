import { Link } from "react-router"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"

const NavBar = () => {
    const { isAuthenticated, handleLogout } = useContext(AuthContext)
    return(
        <nav className="flex justify-center bg-black/75 text-white rounded-lg p-4 ">
            <Link to={'/'} className="px-2">Accueil</Link>
            {!isAuthenticated ? (
                <>
                    <Link to={'/login'} className="px-2">Se connecter</Link>
                    <Link to={'/register'} className="px-2">Inscription</Link>
                </>
                )
                :(
                <>
                    <Link to={'/favori'} className="px-2">Favori</Link>
                    <Link onClick={handleLogout} className="px-2">Se déconnecter</Link>
                </>
                )
            }


        </nav>
    )
}

export default NavBar
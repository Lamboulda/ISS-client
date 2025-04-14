import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyRouter from './MyRouter.jsx'
import { NasaAPIController } from './context/NasaAPIContext.jsx'
import { OpenNotifyAPIController } from './context/OpenNotifyAPICOntext.jsx'
import { AuthController } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NasaAPIController>
    <OpenNotifyAPIController>
      <AuthController>
        <MyRouter/>
      </AuthController>
    </OpenNotifyAPIController>
    </NasaAPIController>
  </BrowserRouter>,
)

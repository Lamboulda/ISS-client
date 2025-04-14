import { useContext } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { OpenNotifyAPIContext } from '../context/OpenNotifyAPICOntext'

const Map =  () => {
    const [ISSPosition, setISSPosition] = useContext(OpenNotifyAPIContext)
return(<>
{ ISSPosition &&

    <MapContainer center={[ISSPosition.latitude, ISSPosition.longitude]} zoom={3} scrollWheelZoom={false} className='h-96'>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[ISSPosition.latitude, ISSPosition.longitude]}>
    <Popup>
     latitude : {ISSPosition.latitude}
     <br />
     longitude : {ISSPosition.longitude}
    </Popup>
  </Marker>
</MapContainer>

}

</>
)
}

export default Map
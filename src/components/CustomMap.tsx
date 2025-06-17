import {Map, Marker} from '@vis.gl/react-maplibre';
import 'maplibre-gl/dist/maplibre-gl.css'; // See notes below

const CustomMap = () => {
  // shows marker on London by default
  const location = [
    50.08452601284662, // latitude
    18.757872249103887, // longitude
  ]
    

  return (
    <div className='container m-auto w-full h-[300px] md:h-[450px] lg:h-[600px] px-2'>
      <Map
    initialViewState={{
      longitude: location[1],
      latitude: location[0],
      zoom: 13
    }}
    style={{width: '100%', height: "100%"}}
    mapStyle="https://tiles.openfreemap.org/styles/liberty"
  >
    <Marker
        longitude={location[1]}
        latitude={location[0]}
        color="red" // domyślny kolor znacznika
      />
  </Map>
    </div>
  
  )
}

export default CustomMap;

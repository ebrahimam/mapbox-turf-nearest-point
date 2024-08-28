import React, { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl";


const MapComponent = () => {

      const mapcontainer = useRef('')

      mapboxgl.accessToken = process.env.MAPBOX_TOKEN


      useEffect(() => {
            if (!mapcontainer.current) return;
            //mapbox 
            const map = new mapboxgl.Map({
                  container: mapcontainer?.current,
                  style: 'mapbox://styles/mapbox/streets-v9',
                  projection: 'globe',
                  zoom: 8,
                  center: [37, 58]
            });

            //add control to mapbox

            map.addControl(new mapboxgl.NavigationControl())
            map.scrollZoom.disable()
      }, [])



      return (<>
            <div ref={mapcontainer} className="map-container" style={{ width: "100%", height: "100vh" }}>

            </div>
      </>)
}

export default MapComponent
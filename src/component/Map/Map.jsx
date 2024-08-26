// import React, { useState } from "react"
// import Map,{Marker,Popup} from "react-map-gl"
// import * as turf from '@turf/turf';
// //MapboxTken
// const MAPBOX_TOKEN = "pk.eyJ1IjoiaGlqaWFuZ3RhbyIsImEiOiJjampxcjFnb3E2NTB5M3BvM253ZHV5YjhjIn0.WneUon5qFigfJRJ3oaZ3Ow"

// //define points
// const points = [
//       { id: 1, coordinates: [-73.935242, 40.73061] },
//       { id: 2, coordinates: [-74.005974, 40.712776] },
//       { id: 3, coordinates: [-73.949997, 40.650002] }
// ];

// const MapComponent = () => {
//       const [nearestPoint, setNesarestPoint] = useState(null)


//       const handlePointsClick = (e) => {
//             const clickedPointlnglat = [e.lnglat.lng, e.lnglat.lat];

//             //nearestPoint
//             const nearest = findNearestPoints(clickedPointlnglat, points)
//             setNesarestPoint(nearest)
//       }

//       const findNearestPoints = (clickedPoint, points) => {
//             let nearest = null;
//             let minDistance = Infinity;

//             points.forEach(point => {
//                   const from = turf.point(clickedPoint);
//                   const to = turf.point(point.coordinates);

//                   const distance = turf.distance(from, to)

//                   if (distance < minDistance) {
//                         minDistance = distance;
//                         nearest = point
//                   }



//             })
//             return nearest
//       }



//       return (
//             <Map initialViewState={{
//                   longitude: -73.935242,
//                   latitude: 40.73061,
//                   zoom: 10
//             }}
//                   style={{ width: "100%", height: "100vh" }}
//                   mapStyle="mapbox://styles/mapbox/streets-v11"
//                   mapboxAccessToken={MAPBOX_TOKEN}
//             >
//                          {nearestPoint && (
//         <Popup
//           longitude={nearestPoint.coordinates[0]}
//           latitude={nearestPoint.coordinates[1]}
//           closeOnClick={true}
//           onClose={() => setNesarestPoint(null)}
//         >
//           <div>Nearest Point: {nearestPoint.id}</div>
//         </Popup>
//       )}

//       {points.map(point => (
//         <Marker
//           key={point.id}
//           longitude={point.coordinates[0]}
//           latitude={point.coordinates[1]}
//         />
//       ))}

//             </Map>
//       )
// }

// export default MapComponent

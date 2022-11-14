
import './App.module.css'
import {Planet} from './user'

function App() {
  const planet = "isNotGasPlanet";
  const isGasPlanet = false;

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Earth", isGasPlanet: false }
  ];

  return (
    <div className='App'>
      {planets.map((planet, key) => {
        if (planet.isGasPlanet) return <h1> {planet.name}</h1>
      }
      )}
    </div>
  )




}

export default App;

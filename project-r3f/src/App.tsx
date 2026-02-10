import { useState } from 'react'
import './App.css'
import Scene3D from './components/Scene3D'
import Controls from './components/Controls'



function App() {
  
  const [rainEnabled, setRainEnabled] = useState<boolean>(true)
  
  const [rainSpeed, setRainSpeed] = useState<number>(1)
  
  const [lightIntensity, setLightIntensity] = useState<number>(2)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>xander face 🌚</h1>
        <p>Contrôlez la tête avec la souris et les flèches du clavier</p>
      </header>

      <div className="canvas-container">

        <Scene3D 
          rainEnabled={rainEnabled}
          rainSpeed={rainSpeed}
          lightIntensity={lightIntensity}
        />
      </div>

      <Controls 
        rainEnabled={rainEnabled}
        setRainEnabled={setRainEnabled}
        rainSpeed={rainSpeed}
        setRainSpeed={setRainSpeed}
        lightIntensity={lightIntensity}
        setLightIntensity={setLightIntensity}
      />
    </div>
  )
}

export default App
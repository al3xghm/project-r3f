interface ControlsProps {
  rainEnabled: boolean
  setRainEnabled: (enabled: boolean) => void
  rainSpeed: number
  setRainSpeed: (speed: number) => void
  lightIntensity: number
  setLightIntensity: (intensity: number) => void
}

function Controls({ 
  rainEnabled,
  setRainEnabled,
  rainSpeed, 
  setRainSpeed,
  lightIntensity,
  setLightIntensity
}: ControlsProps) {
  
  return (
    <div className="controls-panel">
      <h2>⚙️ Contrôles</h2>
      
      <div className="control-group">
        <button 
          className={`rain-toggle-btn ${rainEnabled ? 'active' : 'inactive'}`}
          onClick={() => setRainEnabled(!rainEnabled)}
        >
          {rainEnabled ? '☔ Arrêter la pluie' : '🌧️ Activer la pluie'}
        </button>
      </div>

      {rainEnabled && (
        <div className="control-group">
          <label htmlFor="rain-speed">
            💨 Vitesse de chute : {rainSpeed.toFixed(1)}x
          </label>
          <input
            id="rain-speed"
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={rainSpeed}
            onChange={(e) => setRainSpeed(parseFloat(e.target.value))}
            className="slider"
          />
        </div>
      )}

      <div className="control-group">
        <label htmlFor="light-intensity">
          💡 Intensité lumière : {lightIntensity.toFixed(1)}
        </label>
        <input
          id="light-intensity"
          type="range"
          min="0.5"
          max="5"
          step="0.1"
          value={lightIntensity}
          onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
          className="slider"
        />
      </div>
    </div>
  )
}

export default Controls
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MainHead from './MainHEAD'
import HeadRain from './HeadRAIN'

// Interface pour les props de la scène 3D
interface Scene3DProps {
  rainEnabled: boolean
  rainSpeed: number
  lightIntensity: number
}

// caméra, lumières, modèle principal, pluie de têtes, contrôles souris

// Composant principal : scène 3D avec caméra, lumières, modèle et pluie
function Scene3D({ rainEnabled, rainSpeed, lightIntensity }: Scene3DProps) {
  return (
    <Canvas
      camera={{ 
        position: [0, 0, 8],
        fov: 75 
      }}
    >
      <color attach="background" args={['#242428']} />
      
      {/* Lumière ambiante globale */}
      <ambientLight intensity={0.3} />
      
      {/* Lumière directionnelle avec contrôle d'intensité */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={lightIntensity} 
        castShadow 
      />
      
      {/* Lumières colorées pour l'ambiance */}
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#4a90e2" />
      <pointLight position={[5, 0, -5]} intensity={0.5} color="#e24a90" />

      <MainHead />

      {/* Affiche la pluie de têtes seulement si activée */}
      {rainEnabled && <HeadRain rainSpeed={rainSpeed} />}

      {/* Contrôles souris pour zoom et rotation */}
      <OrbitControls 
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        minDistance={4} 
        maxDistance={15}
      />
    </Canvas>
  )
}

export default Scene3D
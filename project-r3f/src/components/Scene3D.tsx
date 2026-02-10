import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MainHead from './MainHEAD'
import HeadRain from './HeadRAIN'

interface Scene3DProps {
  rainEnabled: boolean
  rainSpeed: number
  lightIntensity: number
}

function Scene3D({ rainEnabled, rainSpeed, lightIntensity }: Scene3DProps) {
  return (
    <Canvas
      camera={{ 
        position: [0, 0, 8],
        fov: 75 
      }}
    >
      <color attach="background" args={['#242428']} />
      
      <ambientLight intensity={0.3} />
      
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={lightIntensity} 
        castShadow 
      />
      
      <pointLight position={[-5, 0, -5]} intensity={0.5} color="#4a90e2" />
      <pointLight position={[5, 0, -5]} intensity={0.5} color="#e24a90" />

      <MainHead />

      {rainEnabled && <HeadRain rainSpeed={rainSpeed} />}

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
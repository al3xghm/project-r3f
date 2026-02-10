import { useRef, useEffect, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'


// Composant principal : affiche une tête 3D contrôlable au clavier
function MainHead() {
  // Référence au groupe 3D (tête + lumière)
  const groupRef = useRef<THREE.Group>(null)
  // Stocke les rotations contrôlées par le clavier
  const manualRotation = useRef({ x: 0, y: 0, z: 0 })

  // Charge le modèle 3D
  const { scene } = useGLTF('/models/model.glb')
  


  // Gère les touches clavier pour contrôler la rotation (flèches + Q/E)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const speed = 0.05

      switch (event.key) {
        case 'ArrowUp':
          manualRotation.current.x += speed
          break
        case 'ArrowDown':
          manualRotation.current.x -= speed
          break
        case 'ArrowLeft':
          manualRotation.current.y += speed
          break
        case 'ArrowRight':
          manualRotation.current.y -= speed
          break
        case 'q': 
          manualRotation.current.z += speed
          break
        case 'e':
          manualRotation.current.z -= speed
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Boucle d'animation : applique les rotations, ajoute inertie et respiration
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += manualRotation.current.x
      groupRef.current.rotation.y += manualRotation.current.y
      groupRef.current.rotation.z += manualRotation.current.z
      
      manualRotation.current.x *= 0.92
      manualRotation.current.y *= 0.92
      manualRotation.current.z *= 0.92

      const breathe = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02
      groupRef.current.scale.set(breathe, breathe, breathe)
    }
  })

 return (
  <Suspense fallback={null}>
    <group ref={groupRef}>
      <primitive object={scene} scale={2} />
      <pointLight position={[0, 2, 2]} intensity={1.5} />
    </group>
  </Suspense>
)
}

useGLTF.preload('/models/model.glb')

export default MainHead

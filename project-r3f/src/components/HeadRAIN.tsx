import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface HeadRainProps {
  rainSpeed: number
}

function HeadRain({ rainSpeed }: HeadRainProps) {
  const instancedMeshRef = useRef<THREE.InstancedMesh>(null)
  const count = 50

  const gltf = useGLTF('/models/model.glb') as unknown as {
    scene: THREE.Group
  }

  const modelMesh = useMemo<THREE.Mesh | null>(() => {
    let found: THREE.Mesh | null = null

    gltf.scene.traverse((child) => {
      if (child instanceof THREE.Mesh && !found) {
        found = child
      }
    })

    return found
  }, [gltf.scene])

  const geometry = modelMesh?.geometry ?? null

  const material = useMemo<THREE.Material | null>(() => {
    if (!modelMesh) return null
    if (Array.isArray(modelMesh.material)) {
      return modelMesh.material[0]
    }
    return modelMesh.material
  }, [modelMesh])

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 20,
      y: Math.random() * 20 + 10,
      z: (Math.random() - 0.5) * 10 - 5,
      speed: Math.random() * 0.5 + 0.3,
      rotation: {
        x: Math.random() * Math.PI,
        y: Math.random() * Math.PI,
        z: Math.random() * Math.PI,
      },
    }))
  }, [count])

  useFrame((_, delta) => {
    if (!instancedMeshRef.current || !geometry) return

    const dummy = new THREE.Object3D()

    particles.forEach((p, i) => {
      p.y -= p.speed * rainSpeed * delta * 10

      if (p.y < -10) {
        p.y = 20
        p.x = (Math.random() - 0.5) * 20
        p.z = (Math.random() - 0.5) * 10 - 5
      }

      p.rotation.x += 0.01
      p.rotation.y += 0.01

      dummy.position.set(p.x, p.y, p.z)
      dummy.rotation.set(p.rotation.x, p.rotation.y, p.rotation.z)
      dummy.scale.set(0.4, 0.4, 0.4)

      dummy.updateMatrix()
      instancedMeshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    instancedMeshRef.current.instanceMatrix.needsUpdate = true
  })

  if (!geometry || !material) return null

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[geometry, material, count]}
      castShadow
      receiveShadow
    />
  )
}

useGLTF.preload('/models/model.glb')

export default HeadRain

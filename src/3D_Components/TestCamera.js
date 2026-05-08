
import React, { useEffect, useRef } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import slides from "../slides.json"
export function TestCamera(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Camera.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["CameraAction.001"].play()
    actions["CameraAction.001"].paused = true;
    actions["CameraAction.001"].time = slides[props.counter]["animationTime"];

  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <PerspectiveCamera name="Camera" makeDefault={true} far={150} near={0.1} fov={34.114} position={[-16.321, 6.614, 15.557]} rotation={[-0.439, 0.194, 0.09]} scale={5.334} />
      </group>
    </group>
  )
}

useGLTF.preload('/Camera.glb')

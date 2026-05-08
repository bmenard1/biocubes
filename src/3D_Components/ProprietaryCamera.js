
import { PerspectiveCamera, CameraControls } from '@react-three/drei'
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import data from "../slides.json"

const ProprietaryCamera = (props) => {
    const { viewport } = useThree();
    const cameraControlRef = useRef()
    const cameraRef = useRef();

    const { camera } = useThree();

    let fov = 20
    const fovRef = useRef(0)

    let change = (viewport.width / viewport.height)

    if (!change) {
      change = 0
    } else {
      change = 20 / Math.pow((viewport.width / viewport.height), 3.0)
    }

    useEffect(() => {
      cameraControlRef.current.enableDamping = false;
      cameraControlRef.current.enableZoom = false;
      cameraControlRef.current?.disconnect()

      if (props.counter !== 23) {
        cameraControlRef.current?.setLookAt(
          data[props.counter]["cameraPosition"][0], data[props.counter]["cameraPosition"][1], data[props.counter]["cameraPosition"][2],
          data[props.counter]["lookPosition"][0], data[props.counter]["lookPosition"][1], data[props.counter]["lookPosition"][2], true
        )
      }
      camera.updateProjectionMatrix();

    }, [props.counter, change])

    let zoom_speed = 30
    useFrame((state, delta) => {
      if (props.counter === 30) {
        camera.fov = fov + fovRef.current + change;
        camera.updateProjectionMatrix();
        fovRef.current += zoom_speed * delta
        fovRef.current = Math.min(fovRef.current, 10)
      } else {
        camera.fov = fov + fovRef.current + change;
        camera.updateProjectionMatrix();

        fovRef.current -= zoom_speed * delta
        fovRef.current = Math.max(fovRef.current, 0)

      }

    })

    useFrame(() => {
      if (props.counter === 23) {
        cameraControlRef.current?.lerpLookAt(
          ...data[22]["cameraPosition"],
          ...data[22]["lookPosition"],
          ...data[23]["cameraPosition"],
          ...data[23]["lookPosition"],
          Math.max(props.yearPercentage, 0),
          false
        )
      }
    })


    return (
      <group>
        <CameraControls ref={cameraControlRef} camera={cameraRef.current}
          enableDamping={false}
          enableZoom={false} />
        <PerspectiveCamera ref={cameraRef} makeDefault fov={fov + change} position={[0, 0, 5]} far={150} />

      </group>

    )
}
export default ProprietaryCamera;

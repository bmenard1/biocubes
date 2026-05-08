
import { useGLTF, PerspectiveCamera, useAnimations, CameraControls} from '@react-three/drei'
import { useFrame, useThree  } from "react-three-fiber";
import { useRef, useEffect } from "react";
import { Vector3 } from "three";
import data from "../slides.json"
import { useSpring, animated } from '@react-spring/three'
import { useState } from 'react';

const ProprietaryCamera = (props) => {
    const { viewport } = useThree();
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    let original_position = [8.58 , 3.47, -14.29+30]
    const to_vector = (a) => {
      return new Vector3(a[0], a[1], a[2])
    }
    const boxref = useRef()
    let new_original_position = useRef(to_vector([7.433169999999995, 5.7117199999999935,24.999999999999822]))
    let current_look_position = useRef(to_vector(data[0]["lookPosition"]))
    let move_position = new Vector3(1.43317, 5.71172, -100)
    const cameraControlRef = useRef()
    const cameraRef = useRef();

    const { camera } = useThree();
    let moving = 0

    let fov = 20
    const fovRef = useRef(0)
    /*
    const {fov} = useSpring({
      fov: (props.counter == 22) ? 30:80
    });
    */
    
    useEffect( () =>{

    }, [])

    const anim_counter = (a) => {
        if(a < 6) {
          return 0
        } else if(a < 7) {
          return 1
        } else {
          return 2
        }
      }
      let change = (viewport.width/viewport.height)
    
      if(!change){
        change = 0
      } else {
        change = 20/Math.pow((viewport.width/viewport.height), 3.0)      
      }

      useEffect(()=> {
        cameraControlRef.current.enableDamping = false;
        cameraControlRef.current.enableZoom = false;
        cameraControlRef.current?.disconnect()
        //cameraControlRef.current?.zoom(0.1, true)
        /*
        if(props.counter == 24) {
          camera.fov = 70 + change;
          camera.updateProjectionMatrix();
        }
        else {
          camera.fov = fov + change;
          camera.updateProjectionMatrix();
        cameraControlRef.current?.setLookAt(data[props.counter]["cameraPosition"][0], data[props.counter]["cameraPosition"][1], data[props.counter]["cameraPosition"][2], 
        data[props.counter]["lookPosition"][0], data[props.counter]["lookPosition"][1], data[props.counter]["lookPosition"][2], true)

        }
        */



        if(props.counter != 23) {
          cameraControlRef.current?.setLookAt(data[props.counter]["cameraPosition"][0], data[props.counter]["cameraPosition"][1], data[props.counter]["cameraPosition"][2], 
          data[props.counter]["lookPosition"][0], data[props.counter]["lookPosition"][1], data[props.counter]["lookPosition"][2], true)

        }
        camera.updateProjectionMatrix();

      })
      let zoom_speed = 30
      useFrame((state, delta)=> {
        if (props.counter == 30) {
          camera.fov = fov  + fovRef.current + change;
          camera.updateProjectionMatrix();
          fovRef.current += zoom_speed *delta 
          fovRef.current = Math.min(fovRef.current, 10 )
        } else {
          camera.fov = fov  + fovRef.current + change;
          camera.updateProjectionMatrix();

          fovRef.current -= zoom_speed * delta 
          fovRef.current = Math.max(fovRef.current, 0 )

        }

      })
    const move_positions = [[7.43317, 4.71172, 30], [1, 8, 38], [-2.43317, 5.71172, 43]]
    let move_vectors = move_positions.map(x => new Vector3(x[0], x[1], x[2]))
    const look_positions = [[1.8,  4.65505, 0], [0.29286,  7.05505, 0], [0.29286,  6.05505, 0]]
    let cont = anim_counter(props.counter) % 3 
    useFrame(() => {
      if(props.counter == 23) {
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


    return(
        <group>
        <CameraControls ref={cameraControlRef} camera = {cameraRef.current}
                        enableDamping = {false}
                         enableZoom = {false}/>
        <PerspectiveCamera ref = {cameraRef} makeDefault fov ={fov + change} position={[0, 0, 5]} far={150}/>

        </group>

    )
}
export default ProprietaryCamera;
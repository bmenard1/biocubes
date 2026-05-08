
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";


const Fog = (props) => {
    let fog_near = 50
    let fog_far = 60
    const fogRef = useRef()
    let cur_fog_near = 50
    let cur_fog_far = 60
    if(props.counter > 20) {
        fog_far = 130
        fog_near = 90

    }
 
    useFrame(({ clock, delta }) => {
        fogRef.current.near = THREE.MathUtils.lerp(fogRef.current.near, fog_near, 0.1)
        fogRef.current.far = THREE.MathUtils.lerp(fogRef.current.far, fog_far, 0.1)

    }); 
    const color_value = "#FFFFFF"
    const other_value = "#555555"
    return(
        <fog attach="fog" color= {color_value} near={cur_fog_near} far={cur_fog_far} ref =  {fogRef}/>
    )
}
export default Fog;
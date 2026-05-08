
import { useGLTF, PerspectiveCamera, useAnimations} from '@react-three/drei'
import { useFrame, useThree  } from "react-three-fiber";
import { useMemo, useEffect, useRef } from "react";
import { Vector3 } from "three";
import * as THREE from "three";

import data from "../slides.json"
import fragmentShader from "./basicfragmentShader"
import vertexShader from "./basicvertexShader"
import { BoxGeometry } from 'three';


const Particles = (props) => {

    useFrame(() => {
    })
    const newref = useRef();
    const sphereFormation = [];
    const uv = new THREE.Vector2();
    const t = new THREE.Vector3();
    const radius = 3.0
    const slide_start = data[0]["animationTime"]
    const slide_length = data[2]["animationTime"] - slide_start
    const particle_timing = useRef(0)
    const uniforms = useMemo(
        () => ({
          uTime: {
            value: 0.0,
          },
          endPosition: {
            value: new Vector3(0, -16, 0),
          },
          maxValue: {
            value: 1.0
          },
          stoplooping: {
            value: false
          }
        }), []);
    
    function mod(n, m) {
      return ((n % m) + m) % m;
    }
    useEffect(() => {
        var geometry = newref.current.geometry;
        const poses = geometry.attributes.position;
        geometry.morphAttributes.position = [];
        const uvs = geometry.attributes.uv;
        for (let i = 0; i < poses.count; i++) {
            uv.fromBufferAttribute(uvs, i);
            t.setFromSphericalCoords(
              radius,
              -Math.PI * (radius - uv.y),
              -(Math.PI / 2) * (uv.x - 0.5) * radius
            );
            sphereFormation.push(t.x, t.y + 12, t.z);
          }
        geometry.morphAttributes.position[0] = new THREE.Float32BufferAttribute(
        sphereFormation,
        3
        );

        newref.current.updateMorphTargets();

    }, [])
    let speed_of_particles = 0
    useEffect(() => {
      speed_of_particles = 2.0

    }, [props.counter])
    const direction_change  = props.counter - props.previousCounter.current
    
    

    useFrame((state, delta) => {
        //influence.current = Math.sin(clock.getElapsedTime()) * 0.5 + 0.5;
        if (newref) {
            if (newref.current) {

                /*
                newref.current.morphTargetInfluences[0] = ((props.curTime - slide_start)/slide_length);
                */
                //newref.current.morphTargetInfluences[0] = ((props.curTime - slide_start)/slide_length);
                  //newref.current.material.uniforms.uTime.value = 0.0
                /*
                  if(props.counter == 4) {
                    newref.current.material.uniforms.uTime.value = 0.99
                  } else {
                    newref.current.material.uniforms.uTime.value += clock.getDelta() * 20//clock.getDelta() * 15//((props.curTime - slide_start)/slide_length);

                  }
                  */
                 /*
                 if(props.counter == 1) {
                  console.log("adding")
                  newref.current.material.uniforms.uTime.value = Math.min(Math.max(newref.current.material.uniforms.uTime.value + speed_of_particles, 0), 1.0)
                 } else {
                  newref.current.material.uniforms.uTime.value = props.animationTime.current 
                 }
                  //newref.current.material.uniforms.uTime.value += delta * 0.5//clock.getDelta() * 15//((props.curTime - slide_start)/slide_length);

                  if (props.counter == 2) {
                    newref.current.material.uniforms.maxValue.value = 100
                  }
                  */
                  newref.current.material.uniforms.uTime.value = particle_timing.current
                  if(props.counter == 1 && (props.previousCounter.current == props.counter)) {
                    particle_timing.current += 0.01
                    newref.current.material.uniforms.stoplooping.value = false

                  } else {
                    particle_timing.current = props.animationTime.current * 0.8
                    newref.current.material.uniforms.stoplooping.value = true
                    
                  }

                  //newref.current.material.uniforms.uTime.value += 0.01

            }
        }
        //newref.current.rotation.y += 0.01 
        newref.current.rotation.y += 0.5 * delta

    });
    return(
        <group>


            <points ref={newref} position={[0, 15.45, 0]} frustumCulled = {false}>
              {/*
                <sphereBufferGeometry args={[2.7, 64, 64]} />
              
    */}
                <icosahedronBufferGeometry attach="geometry" args={[2.7, 10]} />
                <shaderMaterial
                    depthWrite={true}
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />

                {/*
                <pointsMaterial color="#FF0000" size={0.1} sizeAttenuation />

                
                */}
                {/*
                
            

    */}

            </points>

        </group>
    )
}
export default Particles;
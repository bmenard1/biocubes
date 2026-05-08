import * as React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { useRef } from "react";

import ProprietaryCamera from './ProprietaryCamera';
//import Model from './Model';
import { Suspense, useEffect, useState } from 'react';
import Animation from './Animation';
import { Html, Box, Plane, Float, SoftShadows, CameraControls, OrbitControls, PerspectiveCamera, Mask, useMask } from '@react-three/drei';
import { Vector3 } from "three";
import { Loader } from '@react-three/drei';
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing';
import { Stats } from '@react-three/drei';
import { Perf } from 'r3f-perf'
import { ContactShadows } from '@react-three/drei';
import * as THREE from "three";

const ThreePointViz = (props) => {
    let WIDTH = window.innerWidth;
    let HEIGHT = window.innerHeight;
    const stencil = useMask(1, true)

    const composerRef = useRef()



    const { enabled, ...config } = {
        enabled: true,
        size: 50,
        focus: 0,
        samples: 2
    }


    const to_vector = (a) => {
        return new Vector3(a[0], a[1], a[2])
    }

    const cameraControlRef = useRef()

    const cameraRef = useRef();
    const meshRef1 = useRef()

    const [selectionSet, setSelectionSet] = useState([])

    const [clickableSelectionSet, setClickableSelectionSet] = useState([])
    const debug = false


    return (
        <>

            <Canvas concurrent shadows
                gl={{ gammaInput: false, gammaOutput: false }}
                shadowMap={{ type: THREE.PCFSoftShadowMap }}
            >
                <color attach={"background"} args={["#E6E6E6"]} />
                {debug && (
                    <>
                        <Perf
                            minimal={false}
                            matrixUpdate
                            deepAnalyze
                            overClock
                        />
                        <Stats />
                    </>
                )}
                <EffectComposer ref={composerRef} enabled={true} autoClear={false} stencilBuffer={true}>
                    <Outline
                        selection={selectionSet} // selection of objects that will be outlined
                        selectionLayer={10} // selection layer
                        blendFunction={BlendFunction.ALPHA} // set this to BlendFunction.ALPHA for dark outlines
                        patternTexture={null} // a pattern texture
                        edgeStrength={8.5} // the edge strength
                        pulseSpeed={0.0} // a pulse speed. A value of zero disables the pulse effect
                        hiddenEdgeColor={0x287ed4}
                        visibleEdgeColor={0x287ed4}
                        blur={false} // whether the outline should be blurred
                        xRay={true} // indicates whether X-Ray outlines are enabled
                        kernelSize={KernelSize.SMALL} // blur kernel size
                    />
                </EffectComposer>
                <group position={[0, 0, 0]}>
                    <Animation
                        setHovered={props.setHovered}
                        hovered={props.hovered}
                        setInfoPage={props.setInfoPage}
                        setCounter={props.setCounter} counter={props.counter}
                        setSelectionSet={setSelectionSet}
                        setYearPercentage={props.setYearPercentage}
                        scrubbing={props.scrubbing}
                        setScrubbing={props.setScrubbing}
                        previousCounter={props.previousCounter}
                        animationTime={props.animationTime}
                        setcounterHit={props.setcounterHit}
                        counterHit = {props.counterHit}
                        setOpenModal={props.setOpenModal}
                        setLoaded3D={props.setLoaded3D}
                    />
                </group>


                <directionalLight
                    position={[4, 8, 5]}
                    intensity={1}
                    shadow-mapSize={4096}
                    shadow-bias={-0.001}
                    shadow-radius={1000.0}
                    castShadow
                >
                    <orthographicCamera attach="shadow-camera" args={[-30, 50, 20, -20, 0.01, 60]}
                    />
                </directionalLight>
                <ambientLight intensity={0.2} />


            </Canvas>
            <Loader />

        </>
    )

}



export default ThreePointViz;
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { useRef, useState } from "react";

import Animation from './Animation';
import { Loader } from '@react-three/drei';
import { EffectComposer, Outline } from '@react-three/postprocessing'
import { BlendFunction, KernelSize } from 'postprocessing';
import * as THREE from "three";

const ThreePointViz = (props) => {
    const composerRef = useRef()

    const [selectionSet, setSelectionSet] = useState([])

    return (
        <>

            <Canvas concurrent shadows
                gl={{ gammaInput: false, gammaOutput: false }}
                shadowMap={{ type: THREE.PCFSoftShadowMap }}
            >
                <color attach={"background"} args={["#E6E6E6"]} />
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

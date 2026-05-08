import React from 'react';
import { Html } from '@react-three/drei';
import CustomAccordion from './CustomAccordion';
import myData from './OverlayText.json';
function AnimOverlay(props) {
    
    const anim_counter = (a) => {
        if(a < 6) {
          return 0
        } else if(a < 7) {
          return 1
        } else {
          return 2
        }
      }
    
    if (anim_counter(props.counter) == 0) {
        return (
            <group>
            {/*
                <CustomAccordion title={myData[0].title} content={myData[0].content}/>
                <CustomAccordion title={myData[1].title} content={myData[0].content}/>

            */}

            </group>
    
        )
    }

    if (anim_counter(props.counter) == 1) {
        return(
            <Html position = {[2, 1, 0]} className = "box_name">
                <h1>LUNA (Last Universal Common Ancestor)</h1>
            </Html>
        )

    }




}
export default AnimOverlay
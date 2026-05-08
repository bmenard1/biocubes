import React from 'react';
import useMousePosition from './useMousePosition';

function HoverInfo(props) {
    const { clientX, clientY } = useMousePosition();

    return (
    <div class = "HoverInfo" style={{          position: "absolute",
    left: clientX,
    top: clientY +50,
    transform: "translate(-50%, -50%)",
}}>
        <h1> {props.info}.</h1>
    </div>
    )

}
export default HoverInfo
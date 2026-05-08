import {React, useRef} from 'react';
import './ClickModal.css';
import ClickInfo from './ClickInfo';
function ClickModal(props) {
    return (
        <div className='clickmodal-container'>
            
            <div className='clickmodal-box'>
                <ClickInfo
                info={props.info} setInfoPage={props.setInfoPage}
                setHoveringInfo={props.setHoveringInfo} hovered = {props.hovered}
                counter={props.counter}
                
                
                />
            </div>
        </div>
    )

}
export default ClickModal
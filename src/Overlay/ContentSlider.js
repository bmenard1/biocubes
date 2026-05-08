import ReactSlider from "react-slider";
import React, { useState } from 'react';
import "./ContentSlider.css"
import slides from "../slides.json"
const ContentSlider = (props) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [curSliderHover, setSliderHover] = useState(null)
    const TICKS = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
      };
    const handleSliderClick = (value) => {

        props.setCounter(convertSlider(value, show, mul))
        props.setScrubbing(true)

    }
    var keys = Object.keys(slides);
    let less_keys = keys.slice(0,-1)
    let show = [1, 2, 11, 22, 31]
    let show_two = [1, 2, 11, 22, 31, 34]
    let diffs = []
    let mul = 1
    let max_value = keys.length
    for(let i = 0; i < show.length-1; i++) {
        let dif  = show[i+1] - show[i] 
        diffs.push(dif)
        mul *= dif
    }
    diffs.push(Object.keys(slides).length - show[show.length - 1])
    let val = props.counter
    let mult = 0
    const convertCounter = (value, show, mul) => {
        let i = 0
        
        while(value > show[i]) {
            i++
        }
        if(i == 0) {
            return 0
        }
        if (value == (max_value-1)) {
            return show.length * mul;
        }
        let total = ((value - show[i-1])/diffs[i-1]) * mul + (i-1) * mul
        return total
    }
    const convertSlider = (value, show, mul) => {
        let set = Math.round(value/mul)
        let end_index = 20
        if(set >= show.length) {
            return keys.length-1
        }

        return show[set]
    }

    const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]
    return (
        <div style={{width: "100%", height: "100%"}}>


<div className= {(props.counter == 0 ? 'custom_slider_container fadeOut'  : 'custom_slider_container ')} >
     

                <ReactSlider
                    min={0}
                    max={show.length * mul}
                    step={1}
                    className="customSlider"
                    trackClassName="customSlider-track"
                    thumbClassName="customSlider-thumb"
                    marks = {mul}
                    value={convertCounter(props.counter, show, mul)}
                    onAfterChange={handleSliderClick}
                    renderMark={(props) => {
                        let tick_class = "tick_label_top small_type"
                        if(Math.floor(props.key/mul > Math.floor(convertCounter(val, show, mul)/mul))) {
                            props.className = "customSlider-mark selected_mark"
                            tick_class = "tick_label_top small_type  selected_tick"
                        } 
                        if(props.key == show.length * mul) {
                            props.className = "customSlider-mark end_mark"
                        }
                        return <span {...props}  onMouseEnter={()=>{setSliderHover(props.key)}} onMouseLeave={()=> {setSliderHover(null)}}>
                            <div className={tick_class} >
                                {slides[show_two[Math.floor(props.key/mul)]]["title"]}
                            </div>
                        </span>;
                    }}

                    markClassName="customSlider-mark"
                    />
            </div>

    </div>



    );
};

export default ContentSlider;
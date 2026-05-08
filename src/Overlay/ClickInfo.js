import { React, useRef, useContext } from 'react';
import { Grid, Button, Icon, Divider } from 'semantic-ui-react'
import { Vector3 } from 'three';
import myData from './data.json';
import './ClickInfo.css';

import { publicURL } from '../constants';
import { useTranslation } from 'react-i18next';

function ClickInfo(props) {
    const name = useRef("Humans")
    const position = useRef(new Vector3(0, 0, 0))
    let trans = "translate(-120%, 0)"
    const testRef = useRef("ABC")
    let title_name = ""
    

    const { t, i18n} = useTranslation();

    if (props.hovered[0]) {
        if (props.hovered[0].includes("_")) {
            name.current = props.hovered[0].replace("_", " ")
        } else {
            name.current = props.hovered
        }
    }
    if (name.current.includes("Hover")) {
        name.current = name.current.split(" ")[0]
    }


    if (name.current) {
        title_name = name.current;
        title_name = title_name.toString().toLowerCase();
    }

    console.log(i18n.language)
    //
    //if(true){

    let lang = i18n.language;

    let languageSource = "src";
    if(lang != "en") {
        languageSource += lang;
    }

    
    if (name.current) {
        return (
            <div className={props.hovered[0] ? "ClickInfo" : "ClickInfo"}>
                <div className='clickInfo_desktop'>

                    <div className='ClickInfo_image'>

                        <img src={publicURL + myData[name.current].image}></img>
                        <div className = "ClickInfo_image_overlay">
                            
                        </div>

                    </div>

                    <div className = "header">
                    <Grid style = {{"padding-bottom": "10px"}}>
                        <Grid.Row verticalAlign='bottom'>
                            <Grid.Column width = {10}>
                            <div className='info_title'>
                                
                                {t(title_name)} 
                            </div>

                            </Grid.Column>
                            <Grid.Column width = {6} style = {{"text-align": "right"}}>
                            <div className='info_value'>
                                <span>

                                    {myData[name.current].weight} Gt
                                </span>

                        </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    

                    </div>
                    <div className='ClickInfo_content'>

                        <p>{myData[name.current][languageSource]} </p>
                    </div>
                </div>

                <div className='clickInfo_mobile'>

                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={8} className='clickInfo_mobile_image'>
                                <img src={publicURL + myData[name.current].image}></img>
                                <div className = "ClickInfo_image_overlay">
                            
                                <div style={{"position": "relative", "width": "100%", "height": "100%"}}>
                                    <div className='info_value'>
                                        {myData[name.current].weight} Gt
                                    </div>
                                </div>

                                </div>

                            </Grid.Column>
                            <Grid.Column width={8}>
                                <div className="header">
                                    <Grid style={{ "padding-bottom": "10px", "color":"black", "text-align": "left" }}>
                                        <Grid.Row verticalAlign='bottom'>
                                            <Grid.Column width={10}>
                                                <div className='info_title'>
                                                    <div className='big_caption_type'>
                                                        {title_name}
                                                    </div>
                                                </div>

                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>


                                </div>
                                <div className='ClickInfo_content'>
                                    <p>{myData[name.current].src} </p>
                                </div>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </div>

            </div>
            
        )
    }

}
export default ClickInfo
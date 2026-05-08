import React, { useEffect, useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
import './Overlay.css';
import ClickInfo from './ClickInfo';
import slides from '../slides.json'
import { useState } from 'react';
import ImageCreditModal from './ImageCreditModal';
import HeaderGrid from './HeaderGrid';
import SourcesModal from './SourcesModal';
import ClickModal from "./ClickModal";
import ReactGA from "react-ga4";
import { useTranslation } from 'react-i18next'
import LanguageSelector from './LanguageSelector';
import { publicURL } from '../constants';
function Overlay(props) {

    const { t } = useTranslation();

    const [imageCreditModal, setimageCreditModal] = useState(false);
    const [sourcesModal, setsourcesModal] = useState(false)

    let calculated_year_value = Math.trunc(1900 + Math.min(Math.max(props.yearPercentage * 124, 0.0), 124))

    let risePosition = 50;

    if(window.innerHeight < 500) {
        risePosition = 40;
    }


    
    const handletwitterClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Twitter Share',
            label: 'Twitter Share button clicked.'
          });

    }

    const handlelinkedinClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'LinkedIn Share',
            label: 'LinkedIn Share button clicked.'
          });
    }

    const handlefacebookClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Facebook Share',
            label: 'Facebook Share button clicked.'
          });
    }
    const handleEmailClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Email Share',
            label: 'Email Share button clicked.'
          });
    }
    const handleredditClick = () => {
        ReactGA.event({
            category: 'Sharing',
            action: 'Reddit Share',
            label: 'Reddit Share button clicked.'
          });
    }


    return (
        <>

            <div className={(props.counter == 0) ? "logo_container" : 'logo_container logo_moved_position'} >
                <div style={{ "position": "relative", "height": "100%" }}>
                    <div className='icon_container' >
                        <div style={{"position": "relative"}} onClick={() => { props.setCounter(0) }}>
                        <img src="Icon/biocubes_only_2.svg"  />
                        <img id = "netonly" src = "Icon/net_only.svg"/>
                    </div>
                    {(props.counter == 0) && (
                        <>
                            <img id = "subtitle" src='Icon/subtitle3.svg' />
                        </>
                    )}

                    {(props.counter == 0) && (
                    <div className='button_container'>
                        <div style={{"position": "relative"}}>

                        <button className='new_start_button big_caption_type'
                            onClick={() => {
                                props.right_click();
                            }}>
                            {(!props.loaded3D) ? (
                                <>
                                    loading <img className='loading_icon' src='Icon/Loading_02.svg' />
                                </>
                            ): (
                                <span style={{"white-space": "nowrap"}}>
                                    start <img src="Icon/Right.svg" ></img>
                                </span>
                            )}

                        </button>
                        <div className='languageSelector'>
                            <LanguageSelector/>
                        </div>

                        </div>

                </div>

            )}
                    </div>
                </div>
            </div>


            <div className={(!props.loaded3D) ? 'hidingContainer basicfadeIn' : 'hidingContainer slowerFadeOut'}>
                <img className='bottom_drop_2' src="backdrop/Front_Loading_Backdrop.jpg" />
            </div>

            {props.counter != 0 &&
                <button className="click_button small_click_left" type="button"
                    onClick={() => {
                        props.left_click()
                    }}>
                    <img src="Icon/Left.svg" ></img>
                </button>
            }

            {(props.counter != 0) && (props.counter !=22) && props.counter < Object.keys(slides).length - 1 &&
                <button className="click_button small_click_right" style={{ float: "right" }} type="button"
                    onClick={() => {
                        props.right_click()
                    }}>
                    <img src="Icon/Right.svg" ></img>
                </button>
            }

            <Modal
                basic
                onClose={() => { props.setOpenModal(false); props.setHovered([]) }}
                onOpen={() => props.setOpenModal(true)}
                open={props.openModal}
                size='tiny'
            >
                <Modal.Content>
                    <ClickInfo info={props.info} setInfoPage={props.setInfoPage}
                         setHoveringInfo={props.setHoveringInfo} hovered = {props.hovered}
                        counter={props.counter} />
                </Modal.Content>
            </Modal>


            <SourcesModal
                sourcesModal={sourcesModal}
                setsourcesModal={setsourcesModal}
            />

            <ImageCreditModal
                setimageCreditModal={setimageCreditModal}
                imageCreditModal={imageCreditModal}
            />



            {props.rotatePhoneContainer && (
                <div className='rotate_phone_back_container'>
                    <div className='rotate_phone_container'>
                        <p>
                            We recommend rotating your device, or using a larger screen. 
                            <br/>
                            <br/>
                            <img src='Icon/Rotate_Phone.svg'/>
                            <br/>
                            <br/>
                            <button>Close</button>
                        </p>
                    </div>
                </div>

            )}

            <HeaderGrid setimageCreditModal={setimageCreditModal}
                counter={props.counter}
                setCounter={props.setCounter}
                setScrubbing={props.setScrubbing}
                hovered={props.hovered}
                setPlaying={props.setPlaying}
                setcounterHit={props.setcounterHit}
                counterHit={props.counterHit}
                setHovered={props.setHovered}
                setOpenModal={props.setOpenModal}
                setsourcesModal={setsourcesModal}
                right_click = {props.right_click}
                left_click = {props.left_click}

            />

            {(props.counter >= 18 && props.counter < 22) && (
                <>
                    <div className={(props.counter == 18 && props.counterHit) ? 'chapter_title big_caption_type side_title' : 'chapter_title big_caption_type side_title fadeOut'}>
                        <span className='preferredLine'> {t("headers.biomass.1")} </span> 
                        <span className='preferredLine'> <span className='nowrap'> {t("headers.biomass.2")} </span> {t("headers.biomass.3")} </span>
                    </div>

                    <div className={(props.counter == 19 && props.counterHit) ? ' big_caption_type chapter_title ' : ' big_caption_type chapter_title fadeOut'}>
                        {t("headers.cars")}
                    </div>

                    <div className={(props.counter == 20 && props.counterHit) ? 'chapter_title big_caption_type' : ' big_caption_type chapter_title fadeOut'}>
                        
                    <span className='preferredLine'> {t("headers.change.1")} </span> <br/><span className='preferredLine'> {t("headers.change.2")} </span> 
                    </div>

                    <div id="lets_return" className={(props.counter == 21 && props.counterHit) ? ' big_caption_type chapter_title' : ' big_caption_type chapter_title fadeOut'}>
                        <div style={{ "position": "relative", "height": "100%", "width": "100%"}}>
                            <div id='top_part'>
                                <span className='preferredLine'> {t("headers.return.1")} </span> 
                                <br/>
                                <span className='preferredLine'> {t("headers.return.2")} </span> 

                            </div>
                            <div id='bottom_part'>
                                {t("headers.rise.1")} <span className="extra_info_title"> {t("technomass")}</span>
                                <div className="hidden_info_title small_type" >
                                    {t("headers.rise.2")}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className={(props.counter == 30 && props.counterHit) ? ' big_caption_type chapter_title chapter_left_align' : ' big_caption_type chapter_title chapter_left_align fadeOut'}>
            <span className='preferredLine'>{t("headers.tech.1")} </span>
            <br/>
            <span className='preferredLine'>{t("headers.tech.2")} </span>
            </div>

            <div className={`${((props.counter == 32 || props.counter == 33) ) ? ' big_caption_type chapter_title end_chapter' : ' big_caption_type chapter_title end_chapter fadeOut'} ${(props.counter>=33) ? "centeredSentence":""}`}>
                <span className='preferredLine nowrap'>{t("headers.outweigh.1")} </span>
                <br/>
                <span className='preferredLine'>{t("headers.outweigh.2")}</span>
            </div>


            <div className={`${(props.counter == 33 || props.counter == 34) ? 'big_caption_type extralineabs basicfadeIn' : 'big_caption_type  extralineabs basicfadeOut'} ${((props.counter==34) ? "shareEnd": "" )}` }>
                <br/>
                <span className='preferredLine'>{t("headers.share")} </span> 
                <br/>
                

                <span className='sharingLine'>
                    <a href="https://twitter.com/share?url=https://biocubes.net/&text=the%20story%20of%20the%20living%20and%20the%20built%0A" target='_blank' onClick={handletwitterClick}>
                    
                        <img src="Icon/twitter.svg" />
                    </a>

                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://biocubes.net/&quote=Check%20out%20this%20amazing%20website!" target='_blank' onClick={handlefacebookClick}>
                        <img src="Icon/facebook.svg" />
                    </a>

                    <a href="https://reddit.com/submit?url=https://biocubes.net/&title=the%20story%20of%20the%20living%20and%20the%20built>" target='_blank' onClick={handleredditClick}>
                        <img src="Icon/reddit.svg" />
                    </a>

                    <a href="https://www.linkedin.com/shareArticle?url=https://biocubes.net/&title=Biocubes&summary=the%20story%20of%20the%20living%20and%20the%20built&source=https://biocubes.net/" target='_blank' onClick={handlelinkedinClick}>
                        <img src="Icon/linkedin.svg" /> 
                    </a>

                    <a href="mailto:?subject=Check%20out%20biocubes.net&body=the%20story%20of%20the%20living%20and%20the%20built%0Ahttps://biocubes.net/" target='_blank' onClick={handleEmailClick}>
                        <img src="Icon/mail_02.svg" />
                    </a>
                </span>
            </div>


            <div className={((props.counter == 22 || props.counter == 23) ) ? ' big_caption_type chapter_title  chapter_year_counter' : ' big_caption_type chapter_title chapter_year_counter fadeOut'} style={{ top: risePosition - (Math.max(props.yearPercentage, 0) ** 2 * 100) * 0.3 + "%" }}>
                {t("headers.inyear")} {calculated_year_value}

                <div className = {((props.counter == 22) && props.counterHit) ? 'play_button_container' : 'play_button_container fadeOut'} >
                        <button className='click_button play_button'
                            onClick={() => {
                                props.right_click()
                            }}>
                            <img src="Icon/play.svg" ></img>
                        </button>
                    </div>
            </div>


            <div className={(props.counter == 1 && props.counterHit) ? "dna_box basicfadeIn" : "dna_box basicfadeOut"} >
                <div className="dna_caption big_caption_type">
                    {t("headers.dna.start")}
                    <br />
                    <video autoPlay muted webkit-playsinline playsinline loop playsInline webkit-playsInline>
                        <source src= {publicURL + "dna/DNA.mp4"} type="video/mp4" />
                    </video>
                    <span className='preferredLine'>
                    {t("headers.dna.line2")}</span>
                    <span className='preferredLine'> {t("of")} <span className = "emphasis">{t("biological")}</span> {t("and")} <span className="emphasis">{t("technological")}</span> forms. </span>


                </div>
            </div>

            <div className={(props.counter == 33 && props.counterHit) ? "total_cover " : "total_cover hide_overlay"}>
            </div>
            {(props.counter == 0) && (
                <div className='frontCover'></div>
            )
            }

        </>

    )

}
export default Overlay
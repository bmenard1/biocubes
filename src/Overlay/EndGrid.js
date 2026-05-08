import React from 'react';
import './Overlay.css';
import './EndGrid.css'
import PosterDownload from './PosterDownload';
import { useTranslation } from 'react-i18next';

function EndGrid(props) {

    const { t } = useTranslation();

    return (
        <div className='end_section'>
            <div className='interior_section' style={{ "textAlign": "center" }}>
                <div className='big_caption_type'>

                </div>



                    <div className='poster-wrapper'>
                        <div className='poster_caption big_caption_type poster_not_line'>
                            {t("get a poster")}
                        </div>

                        <div className='column_part'>
                            <div className='poster_container top_container'>
                                <div className='top_container_helper' >
                                    <div className='poster_download_helper'>
                                        <PosterDownload poster="bioPoster" />
                                    </div>
                                </div>
                            </div>
                            <div className='poster_container bottom_container'>
                                <div className='poster_download_helper poster_extra_caption'>
                                    <div className='poster_caption big_caption_type line_poster_caption'>
                                        get a poster
                                    </div>
                                    <PosterDownload poster="technoPoster" />
                                </div>
                            </div>
                        </div>

                        <div className='big_poster_container' >
                            <div className='poster_container big_poster'>
                                <div className='poster_download_helper'>
                                    <PosterDownload poster="bioTechnoPoster" />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='end_credit small_type'>
                    © <a href="https://menard.pha.jhu.edu/" target="_blank" rel="noopener noreferrer">Ménard</a> and <a href="https://nikitashtarkman.com/" target="_blank" rel="noopener noreferrer">Shtarkman </a>
                </div>

                <div className='end_credit_dropup small_type' >
                    <div style={{"text-wrap": "nowrap"}}>
                        <span className='small_type link_type' onClick={() => { props.setimageCreditModal(true) }}>image credits</span> | <span className='small_type link_type' onClick={() => { props.setsourcesModal(true) }}>data credits</span>
                    </div>
                </div>

        </div>

    )

}
export default EndGrid

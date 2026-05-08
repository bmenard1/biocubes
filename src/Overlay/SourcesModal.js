import React, { useRef } from 'react';
import { Grid, Modal, Button, Header, Icon, Divider, Form, Radio } from 'semantic-ui-react'
function SourcesModal(props) {
    return <Modal
    basic
    onClose={() => props.setsourcesModal(false)}
    onOpen={() => props.setsourcesModal(true)}
    open={props.sourcesModal}
    size='medium'
    >
    <Modal.Content>
        <div className = "imageCreditContent">
            <div className='small_type'>
                learn more
            </div>
            <Divider/>
            <span style={{"color" : "var(--border_grey"}}>

            © Ménard & Shtarkman. All Rights Reserved
                        </span>
            <Divider/>

            <Grid divided>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <a href="https://www.pnas.org/doi/10.1073/pnas.1711842115" target ="_blank">
                            The biomass distribution on Earth,
                            <br/>
                            Bar-On Y.M, Phillips R, Milo R
                            <br/>
                            Proceedings of the National Academy of Sciences. (2018)
                        </a>
                        <br/>
                        <br/>
                        <span style={{"color" : "var(--border_grey"}}>

                        We consider the dry mass to be roughly twice the carbon mass estimate.
                        </span>


                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://fisherp.mit.edu/wp-content/uploads/2021/01/s41586-020-3010-5.pdf" target ="_blank">
                            Global human-made mass exceeds all living biomass,
                            <br/>
                            Elhacham E, Ben-Uri L, Grozovski J, Bar-On YM, Milo R
                            <br/>
                            Nature. (2020)
                        </a>

                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://ourworldindata.org/plastic-pollution" target ="_blank">
                            Plastic Pollution
                            <br/>
                             Ritchie H and Roser M
                            <br/>
                            OurWorldInData.org. (2018)
                        </a>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider/>
            <div className='small_type'>
                explore very large scales: <a href = "https://mapoftheuniverse.net/" target ="_blank"> Map of the Universe</a>
            </div>
        </div>
    </Modal.Content>
</Modal>

}

export default SourcesModal
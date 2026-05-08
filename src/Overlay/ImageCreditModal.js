import {React, useRef} from 'react';

import { Divider, Modal } from 'semantic-ui-react';
function ImageCreditModal(props) {
    return (
        <Modal
                basic
                onClose={() => props.setimageCreditModal(false)}
                onOpen={() => props.setimageCreditModal(true)}
                open={props.imageCreditModal}
                size='small'
                >
                <Modal.Content>
                <div className = "imageCreditContent">
                    <div className='small_type'>
                        image credits
                    </div>
                    <Divider/>
                
                <ul style={{"padding-inline-start": "0px"}}>
                        <li>
                            <a href = "https://pxhere.com/en/photo/1581887">Plants</a>
                        </li>
                        <li>
                            <a href = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Algae_and_bacteria_in_Scanning_Electron_Microscope%2C_magnification_5000x.JPG">Bacteria</a>: Author SecretDisc - color corrected
                        </li>
                        <li>
                            <a href = "https://www.mpg.de/17732261/1021-entw-151730-x">Archaea</a>: © MPI f. Developmental Biology - color corrected
                        </li>

                    
                        <li>
                            <a href = "https://www.pxfuel.com/en/free-photo-xngwl">Fungi</a>  - color corrected
                        </li>
                        <li>
                            <a href = "https://upload.wikimedia.org/wikipedia/commons/8/81/Mikrofoto.de-Gruenes_Pantoffeltier_2.jpg">Protists</a>  Frank Fox: <a href = "http://www.mikro-foto.de/">https://www.mikro-foto.de/</a> - color corrected
                        </li>
                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:Novel_Coronavirus_SARS-CoV-2.jpg">Viruses</a>  NIAID-RML
                        </li>
                        <li>
                            <a href = "https://www.rawpixel.com/image/8719976">Arthropods</a>  NIAID-RML
                        </li>
                        <li>
                            <a href = "https://www.rawpixel.com/image/5935974/free-public-domain-cc0-photo">Marine Arthropds</a> 
                        </li>
                        <li>
                            <a href = "https://www.wallpaperflare.com/pink-jellyfish-swimming-underwater-pink-jellyfish-underwater-wallpaper-wjqds/download/3840x2400/">Cnidarians</a> 
                        </li>

                        <li>
                            <a href = "https://www.publicdomainpictures.net/en/view-image.php?image=386218&picture=snail">Mollusks</a>: Petr Kratochvil 
                        </li>

                        <li>
                            <a href = "https://www.pexels.com/photo/close-up-of-a-hawk-flying-on-the-background-of-a-clear-blue-sky-15964871/">Bird</a>
                        </li>

                        
                        <li>
                            <a href = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/CSIRO_ScienceImage_2818_Group_of_Nematodes.jpg/1024px-CSIRO_ScienceImage_2818_Group_of_Nematodes.jpg">Nematodes</a>: CSIRO 
                        </li>
                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:Georgia_Aquarium_-_Giant_Grouper_edit.jpg">Fish</a>: Taken by Diliff Edited by Fir0002 
                        </li>

                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:Elephant_running.jpg">Fish</a>: Taken by Byrdyak - color corrected
                        </li>
                        <li>
                            <a href = "https://www.rawpixel.com/image/5914077/image-public-domain-free-animal">Annelids</a>
                        </li>
                        <li>
                            <a href = "https://en.wikipedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg">Humans</a>
                        </li>

                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:20150728_xl_P1000804_Leck_mich_Zaertlichkeit_der_Rinder.JPG">Livestock</a>: Taken by Molgreen
                        </li>
                        <li>
                            <a href = "https://www.flickr.com/photos/cdeimages/4865299925">Aggregates</a>: CDE Global
                        </li>

                        <li>
                            <a href = "https://freerangestock.com/photos/126626/concrete-bricks-.html">Concrete</a>: CDE Global
                        </li>

                        <li>
                            <a href = "https://www.pexels.com/photo/black-asphalt-road-between-trees-2291430/">Asphalt</a>: CDE Global
                        </li>

                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:Mexican_bricks.jpg">Bricks</a>: Tomascastelazo
                        </li>

                        <li>
                            <a href = "https://www.rawpixel.com/image/5924958/photo-image-public-domain-plastic-free">Plastics</a>
                        </li>

                        <li>
                            <a href = "https://en.wikipedia.org/wiki/File:Iron_electrolytic_and_1cm3_cube.jpg">Metals</a>: Alchemist-hp
                        </li>
                        
                        <li>
                            <a href = "https://commons.wikimedia.org/wiki/File:Parking_lot_at_HAA_Kobe.jpg">Cars</a>: Laitr Keiows
                        </li>
                        

                    </ul>
                </div>
                </Modal.Content>
            </Modal>
    )

}
export default ImageCreditModal
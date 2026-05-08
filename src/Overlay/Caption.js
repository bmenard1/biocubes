import ReactSlider from "react-slider";
import data from "../slides.json"
import { Grid, Divider, Button, Icon} from 'semantic-ui-react'
import "./Caption.css"

import { useTranslation } from 'react-i18next'

const HoverSpan = (props) => {
    return(
        <span id={props.id} className="hoverText" onPointerOver={() => {props.setHovered([props.hover_id])}} onPointerOut={()=>{props.setHovered([])}} onClick={() => {props.setOpenModal(true); props.setHovered([props.hover_id]);}}>{props.children}</span>
    )
}



function capitalizeFirstLetter(string) {
    if (string.length === 0) return string; // Check for empty string
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function GetText(sel, setHovered, openModal){

    const { t } = useTranslation();

    switch(sel){
        case 0:
            return 
        case 1:
            return
        case 2:
            return <div>
                <p>
                    {t("captions.1.1")} 
                    <br/> <br/>
                    {t("captions.1.2.1")} <span className="extra_info">{t("biomass")}</span> {t("captions.1.2.2")}
                    <br/>
                    <br/>
                    <span id = "clickorhover"> 
                    {t("captions.1.3")} </span>
                    <div className="hidden_info">
                        <Divider/>
                        {t("captions.1.4")} 
                    </div>
                </p>
            </div>
        case 3:
            return <div>
                <p>
                    {t("captions.2")}<HoverSpan id = "plant_text" hover_id = "Plants" setHovered = {setHovered} setOpenModal = {openModal}>{t("plants")}</HoverSpan>. 
                </p>
            </div>
        case 4:
            return <div>
                <p>
                <HoverSpan id = "fungi_text" hover_id = "Fungi" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("fungi"))}</HoverSpan> {t("and")} <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>{t("animals")}</HoverSpan> {t("captions.3")}
                </p>
            </div>
        case 5:
            return <div>
                <p>
                    {t("captions.4")}
                </p>
            </div>
        case 6:
            return <div>
                <p>
                <HoverSpan id = "protists_text" hover_id = "Bacteria" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("bacteria"))}</HoverSpan> {t("and")}  <HoverSpan id = "protists_text" hover_id = "Archaea" setHovered = {setHovered} setOpenModal = {openModal}>{t("archaea")}</HoverSpan> {t("captions.5")}
                </p>
            </div>
        case 7:
            return <div>
                <p>
                <HoverSpan id = "protists_text" hover_id = "Protists" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("protists"))}</HoverSpan> {t("captions.6")}
                </p>
            </div>

        case 8:
            return <div>
                <p>
                <HoverSpan id = "virus_text" hover_id = "Viruses" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("viruses"))}</HoverSpan> {t("captions.7.1")} <span id = "clickorhover"> {t("captions.7.2")} 
                    </span>
                </p>
            </div>
        case 9:
            return <div>
                <p>
                {t("captions.8.1")} <HoverSpan id = "virus_text" hover_id = "LUCA" setHovered = {setHovered} setOpenModal = {openModal}> (LUCA)</HoverSpan> {t("captions.8.2")} <span className="nowrap">{t("captions.8.3")}</span> {t("captions.8.4")}
                </p> 
            </div>
        case 10:
            return <div>
                <p>
                <HoverSpan id = "animal_text" hover_id = "Animals" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("animals"))}</HoverSpan> {t("captions.9")}
                </p> 
            </div>
        case 11:
            return <div>
                <p>
                {t("captions.10")}
                <br/>
                </p> 
            </div>
        case 12:
            return <div>
                <p>
                    {t("captions.11")} <HoverSpan id = "fish_text" hover_id = "Fish" setHovered = {setHovered} setOpenModal = {openModal}>{t("fish")}</HoverSpan> 
                    {t("and")} <HoverSpan id = "fish_text" hover_id = "Marine_Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>{t("marine arthropods")}</HoverSpan>.
                </p>
            </div>
        case 13:
            return <div>
                <p>
                {t("captions.12")} <span className="nowrap">(<HoverSpan id = "fish_text" hover_id = "Nematodes" setHovered = {setHovered} setOpenModal = {openModal}>{t("nematodes")}</HoverSpan></span>, <HoverSpan id = "fish_text" hover_id = "Annelids" setHovered = {setHovered} setOpenModal = {openModal}>{t("annelids")} </HoverSpan> {t("and")} <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal}>{t("arthropods")}</HoverSpan>).
                </p>
            </div>
        case 14:
            return <div>
                <p>
                <HoverSpan id = "fish_text" hover_id = "Arthropods" setHovered = {setHovered} setOpenModal = {openModal} >{capitalizeFirstLetter(t("arthropods"))}</HoverSpan> {t("captions.13")} <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered} setOpenModal = {openModal}>{t("humans")}</HoverSpan>.
                </p>
            </div>
        case 15:
            return <div>
                <p>
                <HoverSpan id = "fish_text" hover_id = "Wild_Mammals" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("wild mammals"))}</HoverSpan> {t("and")} <HoverSpan id = "fish_text" hover_id = "Wild_Birds" setHovered = {setHovered} setOpenModal = {openModal}>{t("birds")}</HoverSpan> {t("captions.14")}
                </p>
            </div>
        case 16:
            return <div>
                <p>
                {t("captions.16.1")} <HoverSpan id = "fish_text" hover_id = "Humans" setHovered = {setHovered} setOpenModal = {openModal}>{t("humans")}</HoverSpan> {t("captions.16.2")} <HoverSpan id = "fish_text" hover_id = "Wild_Mammals" setHovered = {setHovered} setOpenModal = {openModal}>{t("wild mammals")}</HoverSpan>. 
                </p>
            </div>
        case 17:
            return <div>
                <p>
                    {t("captions.17.1")} <HoverSpan id = "fish_text" hover_id = "Livestock" setHovered = {setHovered} setOpenModal = {openModal}>{t("livestock")}</HoverSpan> {t("captions.17.2")}
                </p>
            </div>
        case 18:
            return 
        case 19:
        case 22:
            return 
        case 23:
            return 
        case 24:
            return <div>
                <p>
                    <HoverSpan id = "plastic_text" hover_id = "Plastics" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("plastics"))}</HoverSpan>  {t("captions.24")} 
                </p>
            </div>                       
        case 25:
            return <div>
                <p>
                {t("captions.25")}  <HoverSpan id = "metal_text" hover_id = "Metals" setHovered = {setHovered} setOpenModal = {openModal}>{t("metals")}</HoverSpan>.
                </p>
            </div>
        case 26:
            return <div>
                <p>
                <HoverSpan id = "asphalt_text" hover_id = "Asphalt" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("asphalt"))}</HoverSpan> {t("captions.26")} 
                </p>
            </div>
        case 27:
            return <div>
                <p>
                <HoverSpan id = "brick_text" hover_id = "Bricks" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("bricks"))}</HoverSpan> {t("captions.27")} 
                </p>
            </div>
        case 28:
            return <div>
                <p>
                <HoverSpan id = "aggregate_text" hover_id = "Aggregates" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("aggregates"))}</HoverSpan> {t("captions.28")} 

                </p>
            </div>
        case 29:
            return <div>
                <p>
                <HoverSpan id = "concrete_text" hover_id = "Concrete" setHovered = {setHovered} setOpenModal = {openModal}>{capitalizeFirstLetter(t("concrete"))}</HoverSpan> {t("captions.29")} 
                </p>
            </div>
        case 30:
            return
        case 31:
            return 
}

}

const Caption = (props) => {
    return (
        <>
        <div className="ContentCaption">
            {GetText(props.counter, props.setHovered, props.setOpenModal)}
        </div>
        </>

    );
};

export default Caption;

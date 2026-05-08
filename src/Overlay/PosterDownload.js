import React from "react";

import "./PosterDownload.css"
import posterInfo from "./posterInfo.json"
import { publicURL } from "../constants";
function PosterDownload(props) {
    return (
        <>
        <div class="poster-download">
            
        <img src={publicURL + posterInfo[props.poster]["image"]} />
        <div class="poster-download-section">

        {posterInfo[props.poster]["posters"].map(function(data) {
             return (
                <div class="row download-row vertical-row">
                    <a class="col" href={publicURL + data["url"]} download target="_blank" rel="noopener noreferrer">{data["title"]}</a>
                </div>
            )
        }) }
        </div>
      </div>
        </>


    )
}
export default PosterDownload
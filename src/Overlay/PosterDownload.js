import React from "react";

import "./PosterDownload.css"
import posterInfo from "./posterInfo.json"
import { publicURL } from "../constants";
function PosterDownload(props) {
    return (
        <>
        <div className="poster-download">

        <img src={publicURL + posterInfo[props.poster]["image"]} alt={`${props.poster} poster preview`} />
        <div className="poster-download-section">

        {posterInfo[props.poster]["posters"].map(function(data, i) {
             return (
                <div className="row download-row vertical-row" key={i}>
                    <a className="col" href={publicURL + data["url"]} download target="_blank" rel="noopener noreferrer">{data["title"]}</a>
                </div>
            )
        }) }
        </div>
      </div>
        </>


    )
}
export default PosterDownload
import React from "react";
import {background} from "../assets"

const Background = () => {
    return (
        <div>
            <video loop autoPlay className="w-full h-full left-0 top-0 bg-cover">
                <source src={background} type="video/mp4" />
            </video>
        </div>
    )
}

export default Background;
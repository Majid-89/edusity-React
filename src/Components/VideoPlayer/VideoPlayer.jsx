import React from 'react'
import Video from "../../assets/Collage-video.mp4"
import "./VideoPlayer.css"

const VideoPlayer = ({ setPlayicon, playicon }) => {
    return (
        <div className={`video-player ${playicon ? ' ' : "hide"}`} onClick={() => setPlayicon(false)}>
            <video src={Video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
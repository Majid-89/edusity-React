import React, { useRef } from 'react'
import Video from "../../assets/Collage-video.mp4"
import "./VideoPlayer.css"

const VideoPlayer = ({ setPlayicon, playicon }) => {

    const player = useRef(null)

    const closePlayer = (e) => {
        if (e.target === player.current) {
            setPlayicon(false)
        }
    }

    return (
        <div className={`video-player ${playicon ? ' ' : "hide"}`} ref={player} onClick={closePlayer}>
            <video src={Video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer
import React  from 'react'
import videoBg from '../video/videoBg.mp4'


const Video = () => {
return (
    <div className= 'Video'>
    <video src={videoBg} autoPlay loop muted></video>
    </div>
)
}

export default Video
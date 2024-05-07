import React from 'react'
import video from '../video/Mermaid.mp4'
import wish from '../images/wish1.webp'
import img1 from '../images/img1.webp'

const Watchnow = () => {
    return (
        <div className='Video' >
            <video src={video
            } autoPlay loop muted></video>
            <div className='content'>
                <img src={wish} className="wish" />
                <img src={img1} className="img1" /><br></br>
                <p className='p2'>2023 . 1h 34m . English </p>
                <p className='p1'>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
                <p className='p3'>Musical | Comedy | Action | Adventure</p>
                <button class="subscribe-btn"> <span class="play-icon">&#9654;</span>  &nbsp;Subscribe to Watch </button>
                <button class="plus-btn"> <span class="">&nbsp; +</span>  &nbsp; </button>
            </div>
        </div>
    )
}

export default Watchnow

import React  from 'react'
import videoBg from '../video/videoBg.mp4'
import wish from '../Images/wish.webp'
import img1 from '../Images/img1.webp'



const Video = () => {
return (
    <div className= 'Video' >
    <video src={videoBg} autoPlay loop muted></video>
    <div className='content'>
        
        <img src={wish} className="wish" />
        <img  src={img1} className="img1" />
        <p className='p1'>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
    </div>

    </div>
)
}


export default Video
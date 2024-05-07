import React from 'react';
import videoBg from '../video/videoBg.mp4';
import wish from '../images/wish.webp';
import img1 from '../images/img1.webp';
import Movies from './Movies';
import HorrorMovies from './HorrorMovies';
import MysteryMovies from './MysteryMovies';
import SmallSlider from './SmallSlider';

const Homepage = () => {

  return (
    <div className="video-container">
      <video src={videoBg} autoPlay loop muted className="video-bg"></video>
      <div className="content-container">
        <div className="content">
          <img src={wish} className="wish" alt="Wish" />
          <img src={img1} className="img1" alt="Image 1" /><br></br>
          <p className='p2'>2023 . 1h 34m . English . </p>
          <p className='p1'>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
          <p className='p3'>Musical | Comedy | Action | Adventure</p>
          <button className="subscribe-btn"> <span className="play-icon">&#9654;</span>  &nbsp;Subscribe to Watch </button>
          <button className="plus-btn"> <span className="plus">&nbsp; +</span>  &nbsp; </button>
          <button className="plus-btn1">U</button> 
          <HorrorMovies/> 
          <Movies />
          <MysteryMovies/>
          <SmallSlider />   
        </div> 
        </div>
      </div>
     
  );
}

export default Homepage;










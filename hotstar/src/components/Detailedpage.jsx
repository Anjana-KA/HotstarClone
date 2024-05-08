import React from 'react';
import img1 from '../images/img1.webp';
import bg2 from '../images/background.webp';
import wish1 from '../images/wish1.webp';

const Detailedpage = () => {
    return (
        <div className='background-container'>
            <img src={bg2} className='background-image ' alt="Background" />
            <div className='content left-8 top-36 '>
                <div><img src={wish1} className="left-72 " alt="Image1" /><br></br>
                    <div><img src={img1} className="left-72 " alt="Image2" /><br></br>
                        <div><p className=' z-10  '>2023 . 1h 34m . English </p>
                            <p className=''>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
                            <p className=''>Musical | Comedy | Action | Adventure</p>
                            <button className="subscribe-btn"> <span className="play-icon">&#9654;</span>  &nbsp;Subscribe to Watch </button>
                            <button className="plus-btn"> <span className="left-44">&nbsp; +</span>  &nbsp; </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailedpage;

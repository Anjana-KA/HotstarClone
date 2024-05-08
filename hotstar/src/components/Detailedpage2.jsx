// import React from 'react';
// import img1 from '../images/img1.webp';
// import bg2 from '../images/background.webp';
// import wish1 from '../images/wish1.webp';

// const Detailedpage2 = () => {
//     return (
//         <div className='background-container'>
//             <img src={bg2} className='background-image' alt="Background" />
//             <div className='content left-8 top-36 overflow-y-hidden'>
//                 <div><img src={wish1} className="left-72 " alt="Image1" /><br></br>
//                     <div><img src={img1} className="left-72" alt="Image2" /><br></br>
//                         <div><p className=' z-10  '>2023 . 1h 34m . English </p>
//                             <p className=''>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
//                             <p className=''>Musical | Comedy | Action | Adventure</p>
//                             <button className="subscribe-btn"> <span className="play-icon">&#9654;</span>  &nbsp;Subscribe to Watch </button>
//                             <button className="plus-btn"> <span className="left-44">&nbsp; +</span>  &nbsp; </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Detailedpage2;





import wish from '../images/wish.webp';
import React, { useEffect, useState } from 'react';
import img1 from '../images/img1.webp';
import { useParams } from 'react-router-dom';

const Detailedpage2 = () => {
        const [imageUrls, setImageUrls] = useState([null]);
        const { id } = useParams();
        useEffect(() => {
          const fetchImage = async () => {
            try {
              const resp = await fetch(`https://api.sampleapis.com/movies/family/${id}`);
              const data = await resp.json();
           
              setImageUrls(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchImage();
        }, [id]);


  return (
    <div className="video-container">
     {imageUrls &&
     <img src={imageUrls.posterURL} alt=''/>
     } 
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
         
        </div>
      </div>
    </div>

  );
}

export default Detailedpage2;










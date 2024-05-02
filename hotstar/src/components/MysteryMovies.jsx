import React from "react";
import { useEffect, useState } from 'react';


export default function MysteryMovies() {

  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/mystery');
        const data = await resp.json();
        const urls = data.map(movie => movie.posterURL);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



return (
  <div className="image-card-scroll-container2">
    <h1><div className="heading2">Mystery Movies</div></h1>

    <div className="image-card-container2">
    
      {imageUrls.slice(0, 27).map((imageUrl, index) => (     
        <div className="image-card2" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
        </div>
       
      ))}

      
    </div>   
  </div>
 
);
}











// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function MysteryMovies() {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resp = await fetch('https://api.sampleapis.com/movies/mystery');
//         const data = await resp.json();
//         const urls = data.map(movie => movie.posterURL);
//         setImageUrls(urls);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: true,
//     responsive: [
     
//     ]
//   };

//   return (
//     <div className="image-card-scroll-container2">
     
  
//       <h1>
//         <div className="heading2">Mystery Movies</div>
//       </h1>
//       <Slider {...settings}>
//         {imageUrls.map((imageUrl, index) => (
//           <div className="image-card2" key={index}>
//             <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

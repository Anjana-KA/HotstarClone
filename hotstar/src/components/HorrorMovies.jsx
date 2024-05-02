import React from "react";
import { useEffect, useState } from 'react';


export default function HorrorMovies() {

  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/horror');
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
  <div className="image-card-scroll-container1">
    <h1><div className="heading1">Horror Movies</div></h1>

    <div className="image-card-container1">
      {imageUrls.slice(18, 27).map((imageUrl, index) => (     
        <div className="image-card1" key={index}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="image" />
        </div>
       
      ))}
    </div>   
  </div>
 
);
}







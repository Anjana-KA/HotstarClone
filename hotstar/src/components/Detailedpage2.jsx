import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/DetailedPage2.css'

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
    <div>
      <h2 className='title1' alt="text">{imageUrls.title}
        <p className='pa2'>2023 . 1h 34m . English . </p>
        <p className='pa1'>Asha, a sharp-witted idealist, makes a powerful wish that's <br></br>answered by Star, a ball of boundless energy. </p>
        <p className='pa3'>Musical | Comedy | Action | Adventure</p>
        <button className="subscribe-btn1  "> <span className="play-icon">&#9654;</span>  &nbsp;Subscribe to Watch </button>
        <button className="plus-bt"> <span className="plus">&nbsp; +</span>  &nbsp; </button>
      </h2>
      {imageUrls &&
        <img src={imageUrls.posterURL} className='img-con' />
      }
    </div>
  );
}
export default Detailedpage2;










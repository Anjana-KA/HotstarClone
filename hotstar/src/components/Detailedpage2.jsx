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
      <h2 className='title1' alt="text">{imageUrls.title}</h2>
      {imageUrls &&
        <img src={imageUrls.posterURL} className='img-con' />
      }
    </div>
  );
}
export default Detailedpage2;










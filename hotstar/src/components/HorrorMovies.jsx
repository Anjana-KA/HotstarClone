import React from "react";
import { useEffect, useState } from 'react';
import '../css/Movies_1.css'; // Import the CSS file

const HorrorMovies = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('https://api.sampleapis.com/movies/horror');
        const data = await resp.json();
        const urls = data.map((movie) => movie.posterURL);
        setImageUrls(urls);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const slideLeft = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const slideRight = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 3, imageUrls.length - 3)
    );
  };

  return (
    <div className="image-card-scroll-container1">
      <h1>
        <div className="heading1">Horror Movies</div>
      </h1>
      <div className="image-card-container1">
        <button className="button-left" onClick={slideLeft} disabled={currentIndex === 0}>
          &lt;
        </button>
        {imageUrls.slice(currentIndex, currentIndex + 7).map((imageUrl, index) => (
          <div className="image-card1" key={index}>
            <img
              src={imageUrl}
              alt={`Image ${currentIndex + index + 4}`}
              className="image"
            />
            {/* Content to display on hover */}
            <div className="movie-content">
              {/* Add your content here */}
           
              <button className="watch-now-button">Watch Now</button>
              <button className="plusb"> <span className="plus">&nbsp; +</span>  &nbsp; </button>

              <h3>Movie Title</h3>
              <p>Description</p>
            </div>
          </div>
        ))}
        <button className="button-right" onClick={slideRight} disabled={currentIndex === imageUrls.length - 1}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default HorrorMovies;






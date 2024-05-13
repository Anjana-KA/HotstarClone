import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import '../css/Movies.css';
import { useStarredMovies } from './StarredMoviesContext'; // Importing useStarredMovies hook

const Movies = () => {
    const { starredMovies, setStarredMovies } = useStarredMovies(); // Using the useStarredMovies hook
    const [imageUrls, setImageUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [buttonClicked, setButtonClicked] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch('https://api.sampleapis.com/movies/family');
                const data = await resp.json();
                setButtonClicked(Array(data.length).fill(false));
                setImageUrls(data);
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

    const handleButtonClick = (index) => {
        const newButtonClicked = [...buttonClicked];
        newButtonClicked[index] = !newButtonClicked[index];
        setButtonClicked(newButtonClicked);

        const movie = imageUrls[index]; // Get the movie object

        if (newButtonClicked[index]) {
            setStarredMovies([...starredMovies, movie]);
        } else {
            // Remove the unstarred movie by filtering based on id
            setStarredMovies(starredMovies.filter((m) => m.id !== movie.id));
        }
    };

    return (
        <div className="image-card-scroll-container">
            <h1>
                <div className="heading">Latest Releases</div>
            </h1>
            <div className="image-card-container">
                <button className="button-left" onClick={slideLeft} disabled={currentIndex === 0}>
                    &lt;
                </button>
                {imageUrls.slice(currentIndex, currentIndex + 7).map((imageUrl, index) => (
                    <div className="image-card" key={imageUrl.title}>
                        <img
                            src={imageUrl.posterURL}
                            alt={`Image ${currentIndex + index + 4}`}
                            className="image"
                        />
                        <button className={buttonClicked[index] ? 'top-right-button clicked' : 'top-right-button'} onClick={() => handleButtonClick(index)}>
                            <FaStar className="star-icon" style={{ color: buttonClicked[index] ? 'yellow' : 'white' }} />
                        </button>

                        <div className="movie-content">
                            <Link to={`/watch-now2/${imageUrl.id}`}>
                                <button className="watch-now-button"><span className="play-icon">&#9654;  </span>Watch Now</button>
                            </Link>
                            <button className="plusb"> <span className="plus">&nbsp; +</span>  &nbsp; </button>
                            <p className='p'>2023 . 1h 34m . English  </p>
                            <p className='ph'>Wish, Animated movies have brought joy and wonder to audiences around the world of cartoons</p>
                        </div>
                    </div>
                ))}
                <button className="button-right" onClick={slideRight} disabled={currentIndex === imageUrls.length - 1}>
                    &gt;
                </button>
            </div>

            {/* Button to show Modal Window for Starred Movies */}


        </div>
    );
}
export default Movies;

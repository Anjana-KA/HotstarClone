import React, { useState } from "react";
import logo from "../images/logo.svg";
import myspace from "../images/myspace.svg";
import search from "../images/search.svg";
import home from "../images/home.svg";
import tv from "../images/tv.svg";
import movies from "../images/movies.svg";
import sports from "../images/sports.svg";
import category from "../images/category.svg";
import Favorite from "../images/favorite.svg";
import { useStarredMovies } from "./StarredMoviesContext";

const Navbar = () => {
    const [touch, setTouch] = useState(false);
    const { starredMovies } = useStarredMovies();
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }
    return (
        <div className='grid grid-cols-2 bg-transparent h-screen w-28 absolute z-10 navbar bg-gradient-to-r from-black'>
            <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
                <img src={logo} className="w-16 ml-8 mt-6" />
                <a href="#" className="subscribe-button">Subscribe&nbsp;<span>&gt;&nbsp;</span></a><br /><br />
                <img src={myspace} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300 " />
                <img src={search} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={home} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={tv} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={movies} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={sports} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <img src={category} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                <div style={{ }} onClick={handleOpenModal} >
                    <img src={Favorite} className="w-7 ml-9 mt-8 cursor-pointer hover:scale-125 transition-transform duration-300" />
                    <span className="ml-11 text-slate-100"> {starredMovies.length}</span>
                    {starredMovies.length > 0 && (
                        <div className="notification-badge">{starredMovies.length}</div>
                    )}
                </div>              
                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2 className='favorite'>Favorite Movies</h2>
                            <div className="starred-movies">
                                <div className='cards'>
                                    {starredMovies.map((movie) => (
                                        <div key={movie.title} className='card'>
                                            <img src={movie.posterURL} alt={movie.title} />
                                            <p>{movie.title}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {touch &&
                <div className="z-20 ml-8 w-20 h-screen font-bold text-base text-slate-300 ">
                    <h4 className="mt-40">My Space</h4>
                    <h4 className="mt-9">Search</h4>
                    <h4 className="mt-9">Home</h4>
                    <h4 className="mt-9">TV</h4>
                    <h4 className="mt-9">Movies</h4>
                    <h4 className="mt-9">Sports</h4>
                    <h6 className="mt-9">Categories</h6>
                    <h6 className="mt-9">Favorites</h6>
                </div>
            }
        </div>
    );
}
export default Navbar;

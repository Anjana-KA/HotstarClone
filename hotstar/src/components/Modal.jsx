import React, { useState } from "react";
import ReactDom from 'react-dom';
import { useStarredMovies } from "./StarredMoviesContext";

const Modal = ({ open, close }) => {
    const { starredMovies } = useStarredMovies();
    if (open) {
        return ReactDom.createPortal(
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={close}>&times;</span>
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
            </div>,
            document.getElementById('portal')
        );
    }
}
export default Modal;

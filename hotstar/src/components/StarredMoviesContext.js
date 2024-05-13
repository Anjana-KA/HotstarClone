import React, { createContext, useContext, useState } from "react";

const StarredMoviesContext = createContext();
export const StarredMoviesProvider = ({ children }) => {
  const [starredMovies, setStarredMovies] = useState([]);

  return (
    <StarredMoviesContext.Provider value={{ starredMovies, setStarredMovies }}>
      {children}
    </StarredMoviesContext.Provider>
  );
};
export const useStarredMovies = () => useContext(StarredMoviesContext);

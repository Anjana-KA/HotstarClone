import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Homepage from "./components/Homepage.jsx";
import Detailedpage from "./components/Detailedpage.jsx";
import Detailedpage1 from "./components/Detailedpage1.jsx";
import Detailedpage2 from "./components/Detailedpage2.jsx";
import { StarredMoviesProvider } from "./components/StarredMoviesContext";

function App() {
  return (
    <StarredMoviesProvider>
      <div className="App flex">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/watch-now" element={<Detailedpage />} />
            <Route path="/watch-now1" element={<Detailedpage1 />} />
            <Route path="/watch-now2/:id" element={<Detailedpage2 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StarredMoviesProvider>
  );
}

export default App;

import './App.css';
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Homepage from './components/Homepage.jsx';
import WatchNow from './components/Watchnow.jsx'; 

function App() {
  return (
    <div className="App flex">

      <BrowserRouter>

        <Navbar/> 
        <Homepage/>

        <Routes>
          <Route path="/watch-now" element={<WatchNow/>} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;

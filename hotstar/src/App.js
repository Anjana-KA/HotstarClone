import './App.css';
import './index.css'
import Navbar from './components/Navbar.jsx'
import Video from './components/Video.jsx';
import Homepage from './components/Homepage.jsx';
import Movies from './components/MovieList.jsx';

function App() {
  return (
    <div className="App flex">

      <Navbar/> 
      <Video/> 
      <Movies/>

      {/* <Homepage/>    */}

    </div>
  );
}

export default App;

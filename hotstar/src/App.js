import './App.css';
import './index.css'
import Navbar from './components/Navbar.jsx'
import Video from './components/Video.jsx';
import Homepage from './components/Homepage.jsx';

function App() {
  return (
    <div className="App flex">

    {/* // <div className='flex'> */}
      <Navbar/> 
      {/* <Homepage/>    */}
      <Video/>
      
    </div>
  );
}

export default App;

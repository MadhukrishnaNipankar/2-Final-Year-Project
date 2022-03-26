import Navbar from './Navbar';
import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import '../Styles/App.css';
import LeftBar from './LeftBar';
import VideoFeed from './VideoFeed';
import Upload from './Upload';
// import Login from './Login';


function App() {
  // Last Modified Date: 21/03/22 by mk,yg,am,vd 
  return (
    <>
      <LoggedInStatusState>
        <div className="App">
        <Navbar/>
        <LeftBar/>
        {/* <Login/> */}
        {/* <VideoFeed/> */}
        <Upload/>
        </div>
      </LoggedInStatusState>
    </>
  );
}

export default App;

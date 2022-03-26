import Navbar from './Navbar';
import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import '../Styles/App.css';
import LeftBar from './LeftBar';
import Login from './Login';
import Signup from './Signup';
import Upload from './Upload';
import VideoFeed from './VideoFeed';


function App() {
  return (
    <>
      <LoggedInStatusState>
        <div className="App">
        <Navbar/>
        <LeftBar/>
        {/* <Upload/> */}
        {/* <VideoFeed/> */}
        <Login/>
        {/* <Signup/> */}
        </div>
      </LoggedInStatusState>
      {/* <ForgetPass/> */}
      {/* <OTP/> */}
    </>
  );
}

export default App;

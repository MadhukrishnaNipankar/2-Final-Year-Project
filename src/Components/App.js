import Navbar from './Navbar';
import LoggedInStatusState from '../Context/LoggedInStatus/LoggedInStatusState';
import '../Styles/App.css';
import LeftBar from './LeftBar';
// import Login from './Login';
// import Signup from './Signup';


function App() {
  // Last Modified Date: 21/03/22 by mk,yg,am,vd 
  return (
    <>
      <LoggedInStatusState>
        <div className="App">
        <Navbar/>
        <LeftBar/>
        {/* <Login/>
        <Signup/> */}
        </div>
      </LoggedInStatusState>
    </>
  );
}

export default App;

import './App.css';
import Login from './components/Main/Login'
import Logout from './components/Main/Logout/Logout';
import Profile from './components/Main/Profile/Profile';
import Nav from './components/Head/Nav';
import TopNav from './components/Head/TopNav';
import LoginIntro from "./components/Main/LoginIntro";
import {useAuth0} from '@auth0/auth0-react';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      {isAuthenticated ? <><Profile/><Logout/> </> : <Login/>}
      <TopNav/>
      <LoginIntro/>
      <Nav/>
    </div>
  );
}

export default App;

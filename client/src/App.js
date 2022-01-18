import './App.css';
import Login from './components/Main/Login'
import Logout from './components/Main/Logout/Logout';
import Profile from './components/Main/Profile/Profile';
import {useAuth0} from '@auth0/auth0-react';
import fetchData from './utils/fetch'
import SubmitData from './components/Main/SubmitData/SubmitData';

function App ()  {
  const {isAuthenticated} = useAuth0();

  return (
    <div className="App">
      <SubmitData/>
    </div>
  );
}

export default App;

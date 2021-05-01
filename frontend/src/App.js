import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile'
import NavbarMenu from './components/Navbar'
import useToken from './useToken';

function App() {
  // eslint-disable-next-line
  const { token, setToken } = useToken();
  if(token) {
    return (
      <Fragment>
        <NavbarMenu />
        <Profile auth={JSON.parse(localStorage.getItem('auth'))} />
      </Fragment>
    )
  }
  return (
    <div>
        <NavbarMenu />
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

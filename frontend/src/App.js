import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile'
import NavbarMenu from './components/Navbar'
import Settings from './components/settings/Settings'
import useToken from './useToken';

function App() {
  // eslint-disable-next-line
  const { token, setToken } = useToken();

  return (
    <div>
        <NavbarMenu />
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {token ? (
                <Profile auth={JSON.parse(localStorage.getItem('auth'))} />
              ): (
                <h1>Please login</h1>
              )}
            </Route>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;

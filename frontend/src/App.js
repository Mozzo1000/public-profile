import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import useToken from './useToken';

function App() {
  // eslint-disable-next-line
  const { token, setToken } = useToken();

  return (
    <div>
        <h1>profile-picuture</h1>
        <p>Logged in as: {JSON.parse(localStorage.getItem('auth'))['display_name']}</p>
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

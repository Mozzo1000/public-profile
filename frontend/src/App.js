import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken();

  return (
    <div>
        <h1>profile-picuture</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
          </Switch>
        </BrowserRouter>


    </div>
  );
}

export default App;

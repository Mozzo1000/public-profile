import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('auth');
    const userToken = JSON.parse(tokenString);
    return userToken?.access_token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('auth', JSON.stringify(userToken));
    setToken(userToken.access_token);
  };

  return {
    setToken: saveToken,
    token
  }
}
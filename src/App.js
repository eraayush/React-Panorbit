import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { apiFailure, onLoading, apiSuccess } from './redux/actions/actions.js';
import MainPage from './components/MainPage/MainPage';
import Profile from './components/ProfilePage/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const API_URL = 'https://panorbit.in/api/users.json';

function App() {
  const dispatch = useDispatch();
  const { loading, error, panorbitData } = useSelector((state) => state);

  useEffect(() => {
    dispatch(onLoading());
    axios
      .get(API_URL)
      .then((response) => {
        dispatch(apiSuccess(response.data.users));
      })
      .catch((error) => {
        dispatch(apiFailure(error));
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

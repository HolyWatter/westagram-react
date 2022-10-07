import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login/Login.js';
import Main from './pages/Main/Main.js';
import LoginInput from './pages/Login/LoginInput.js';
import './styles/common.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Login />}/>
      <Route path={'/main'} element={<Main />}/>
    </Routes>
  </BrowserRouter>
);


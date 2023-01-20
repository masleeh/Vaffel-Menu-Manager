import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='login' element={<Login />} />
      </Routes>
  );
}

export default App;

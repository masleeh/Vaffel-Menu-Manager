import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

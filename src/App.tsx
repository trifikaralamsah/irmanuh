import React from 'react';
import './assets/styles/global-output.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Views/main/main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

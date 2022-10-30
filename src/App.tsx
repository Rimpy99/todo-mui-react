import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Card from './components/Cards';
import CreateCard from './components/CreateCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CreateCard />}/>
        <Route path='/todo-mui-react' element={<Navigate to='/'/>}/>
        <Route path='/home' element={<Navigate to='/'/>}/>
        <Route path='/cards' element={<Card />}/>
      </Routes>
    </>
  );
}

export default App;

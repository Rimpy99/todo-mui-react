import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Card from './components/Cards';
import CreateCard from './components/CreateCard';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<CreateCard />}/>
        <Route path='/todo-mui-react' element={<CreateCard />}/>
        <Route path='/cards' element={<Card />}/>
      </Routes>
    </>
  );
}

export default App;

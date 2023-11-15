import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StartPage from './pages/StartPage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

const App = () => {
  const username = localStorage.getItem("userName")
  return(
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    {username && <Navbar />}
    <Routes>
      <Route path="/" element={username?<Home />:<StartPage/>} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
    </Routes>
    <Footer />
  </Box>
  )
}

export default App;

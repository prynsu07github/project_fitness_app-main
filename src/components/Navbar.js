import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';
import {House} from 'phosphor-react';
import {Barbell} from 'phosphor-react'



const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '75px', height: '75px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="70px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      
      <Link to="/"  fontSize={"60px"} style={{textDecoration: 'none', color: 'Black', borderBottom: '3px solid #FF2625', fontSize:'40px',}}><House size={50} />Home</Link>
      <a className="hovering" href="#exercises"  style={{  textDecoration: 'none', color: 'Black',scrollBehavior:'smooth', fontSize:'40px',scrollBehavior:"smooth"}}><Barbell size={50} /> Exercises</a>
      
    </Stack>
  </Stack>
);

export default Navbar;

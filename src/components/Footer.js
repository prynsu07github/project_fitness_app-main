import React from 'react';
import { Box, Stack, Typography, colors } from '@mui/material';
import Logo from '../assets/images/Logo.png';


const Footer = () => (
  <Box mt="10px" bgcolor="lightgrey">
    <Stack gap="20px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '80px' }} />
    </Stack>
    <Typography variant="h5" sx={{fontWeight:'900', fontSize: { lg: '30px', xs: '15px' } }} mt="41px" textAlign="center" pb="40px">Sweat Box</Typography>
    <Box class="foot">
    <h3><a href="/" style={{color:'black',textDecoration: 'none'}} >Home </a><br/></h3>
    <h3><a href="#exercises" style={{ color:'black',textDecoration: 'none'}} >Exercise </a></h3>
    </Box>
    <h4 class="foot">Email:sweatbox123@gmail.com</h4>
    <p className='foot'>&copy;{ new Date().getFullYear()}SweatBox.All rights reserved.</p>
    
  </Box>

  
);

export default Footer;

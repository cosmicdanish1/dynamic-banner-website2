// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box } from '@mui/material';
import Banner from './Banner';
import Dashboard from './Dashboard';

const App = () => {
  const [banner, setBanner] = useState({
    description: '',
    timer: 60,
    link: '',
    visibility: true,
  });

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get('/api/banner');
        setBanner(response.data);
      } catch (error) {
        console.error("There was an error fetching the banner data!", error);
      }
    };
    fetchBannerData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Banner
          description={banner.description}
          timer={banner.timer}
          link={banner.link}
          visibility={banner.visibility}
        />
        <Dashboard updateBanner={setBanner} />
      </Box>
    </Container>
  );
};

export default App;

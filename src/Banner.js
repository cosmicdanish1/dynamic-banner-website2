// src/Banner.js
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = ({ description, timer, link, visibility }) => {
  const [timeLeft, setTimeLeft] = useState(timer);

  useEffect(() => {
    if (!visibility || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [visibility, timeLeft]);

  if (!visibility || timeLeft <= 0) return null;

  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        textAlign: 'center',
        backgroundColor: 'primary.main',
        color: 'white',
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">{description}</Typography>
      <Typography variant="subtitle1">Time left: {timeLeft} seconds</Typography>
      <Button
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{ mt: 1, backgroundColor: 'white', color: 'primary.main' }}
      >
        Learn more
      </Button>
    </Box>
  );
};

export default Banner;

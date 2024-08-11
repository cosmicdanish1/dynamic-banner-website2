// src/Dashboard.js
import React, { useState } from 'react';
import { Box, TextField, Button, FormControlLabel, Switch } from '@mui/material';
import axios from 'axios';

const Dashboard = ({ updateBanner }) => {
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(60);
  const [link, setLink] = useState('');
  const [visibility, setVisibility] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bannerData = { description, timer, link, visibility };

    try {
      await axios.post('/api/banner', bannerData);
      updateBanner(bannerData);
    } catch (error) {
      console.error("There was an error updating the banner!", error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        maxWidth: 400,
        mx: 'auto',
        mt: 3,
      }}
    >
      <TextField
        fullWidth
        label="Banner Description"
        variant="outlined"
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextField
        fullWidth
        type="number"
        label="Timer (seconds)"
        variant="outlined"
        margin="normal"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />
      <TextField
        fullWidth
        label="Banner Link"
        variant="outlined"
        margin="normal"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <FormControlLabel
        control={
          <Switch
            checked={visibility}
            onChange={() => setVisibility(!visibility)}
            color="primary"
          />
        }
        label="Banner On/Off"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Update Banner
      </Button>
    </Box>
  );
};

export default Dashboard;

import { Box, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="not-found">
    <Stack sx={{ textAlign: 'center' }}>
    <Box sx={{ padding: 2 }}>
    <img
      src="https://cdn.tgdd.vn/hoi-dap/580732/loi-404-not-found-la-gi-9-cach-khac-phuc-loi-404-not-3-800x534.jpg"
      alt="not-found"
      width="1000" 
      height="500"
    /></Box>
    <Link to="/" className="link-home">
      Go Home
    </Link>
    </Stack>
  </div>
);

export default NotFound;

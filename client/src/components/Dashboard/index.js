import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { NavContainer } from './styled';

const DetailDashboard = ({ description, heading }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavContainer />

      <Container
        maxWidth="md"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: { xs: 3, md: 5 },
            textAlign: 'center',
            borderRadius: 4,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            width: '100%',
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            {heading || 'Welcome to Dashboard'}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              maxWidth: '600px',
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            {description || 'No description available at the moment.'}
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default DetailDashboard;

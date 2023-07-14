import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
//import { useSelector } from 'react-redux/lib/
import Masonry from '@mui/lab/Masonry';
import { Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '../styled-components/Button';
import { docsFetchData, selectDocsData } from '../redux/slices/docs';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(props);
  console.log('coming back props');
  const docs = useSelector(selectDocsData);

  useEffect(() => {
    dispatch(docsFetchData());
  }, []);

  let history = useHistory();

  function handleReadMore(data) {
    history.push({
      pathname: '/view',
      search: '?id=' + data._id,
      state: {},
    });
  }

  return (
    <Box sx={{ p: 4 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
        {docs?.map((val, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{
              bgcolor: 'grey.50', // A very light grey background
              transition: 'box-shadow 0.3s ease-in-out',
              '&:hover': {
                boxShadow: 10,
                pointerEvents: 'hand',
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" color="text.primary" display="block">
                {val.title}
              </Typography>
              {/*            <Typography variant="h5" component="h2" sx={{ fontWeight: 'medium', mb: 1.5, wordBreak: 'break-word' }}>
              {val.subtitle}
            </Typography> */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 1,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 3, // Limit to 3 lines
                }}
              >
                {val.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ pl: 2, pb: 2 }}>
              <Button size="small" variant="contained" onClick={() => handleReadMore(val)}>
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Masonry>
    </Box>
  );
};

export default Home;

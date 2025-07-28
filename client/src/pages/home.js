import React, { useEffect, useState } from 'react';
import { docsFetchData } from '../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory } from 'react-router-dom';
//import { useSelector } from 'react-redux/lib/
import Masonry from '@mui/lab/Masonry';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '../styled-components/Button';

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

  console.log(props);
  console.log('coming back props');
  const { docs = [] } = props;
  //const [cardArr, setCardArr] = useState([]);

  useEffect(() => {
    props.docsFetchData();
    console.log('card ref', cardRef.current);
    console.log('row ref', rowRef.current);
  }, []);

  let history = useHistory();

  function handleClick(data) {
    history.push({
      pathname: '/view',
      search: '?id=' + data._id,
      state: {},
    });
  }

  const rowRef = React.createRef();

  const cardRef = React.createRef();

  return (
    <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4} sx={{ p: 4 }}>
      {docs.map((val, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="overline" color="text.primary" display="block">
              {val.title}
            </Typography>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'medium', mb: 1.5, wordBreak: 'break-word' }}>
              {val.subtitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {val.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ pl: 2, pb: 2 }}>
            <Button size="small" variant="contained">
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Masonry>
  );
};

const mapStateToProps = (state) => {
  return {
    docs: state.fetchDocuments.data,
  };
};

//const mapDispatchToProps = { fetchData: docsFetchData }

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      docsFetchData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

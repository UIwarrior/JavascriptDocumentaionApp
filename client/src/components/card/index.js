import React from 'react';

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

const LCard = ({ isOpen, ref, children }) => {
  const classes = useStyles();

  //using useref for expand/collapse arrow with card
  // const cardContent = useRef(null);
  //const upArrow = useRef(null);
  // const downArrow = useRef(null);

  /*    const toggleCard = () => {
        console.log(cardContent.current);
        cardContent.current.style.display =
            cardContent.current.style.display === 'flex' || cardContent.current.style.display === '' ? 'none' : 'flex';
        upArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'none' : 'block';
        downArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'block' : 'none';
    };
 */
  /*  return (
          <Card ref={ref}>
              {children}
          </Card>
    ) */
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default LCard;

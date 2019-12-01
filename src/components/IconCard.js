import React, {useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {connect} from 'react-redux'
import {fecthIconCard} from '../actions/iconCard-actions' 

import Grid from './Grid'

const useStyles = makeStyles({
  card: {
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

const IconCard= (props) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  console.log(`IconCard props.match`,props.match)
  console.log(`iconCard projects`, props.projects)

  

  const id = props.match.params.id

  useEffect(()=>{
    props.fecthIconCard(props.match.params.id)
  }, id)

  return (
      <>
      <div>
        <h1></h1>
    {props.projects.map(e =>
    <Grid key={e.id} list={e}/>)}
        </div>
    {/* <Grid/> */}
    {/* <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.projects.name}
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
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
    </Card> */}
    </>
  );
}
const mapStateToProps = state =>{
    return{
        projects: state.iconCard.list
        
    }
}
export default connect(
    mapStateToProps,
    {fecthIconCard}
    )(IconCard)

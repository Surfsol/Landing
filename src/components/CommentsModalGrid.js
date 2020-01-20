import React from "react";
import Nav from "./Nav";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },

  title: {
    fontSize: 20
  }
});

const CommentsModalGrid = props => {
  const classes = useStyles();

  const listStyle = {
    margin: "auto",
    marginTop: "25vh",
    width: "70%",
    justifyContent: "center"
  };



 
  return (
    <>
      <div>
        <Nav />
      </div>
      <div style={listStyle}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              Comment : {props.list.comment}
            </Typography>
            <Typography>
              <a href={props.list.github} target="_blank">
                {props.list.github}
              </a>
            </Typography>
            <Typography className={classes.title}>
              Technology : {props.list.tech_one}
            </Typography>
            <Typography className={classes.title}>
              Technology : {props.list.tech_two}
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default CommentsModalGrid;

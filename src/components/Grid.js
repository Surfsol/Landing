import React from "react";
import Nav from "./Nav";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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

const Grid = props => {
  console.log(`Grid`, props.list);
  const classes = useStyles();

  const listStyle = {
    margin: "auto",
    marginTop: "25vh",
    width:"70%",
    justifyContent: "center",
    
  };
  return (
    <>
      <div>
        <Nav />
      </div>

      <div style={listStyle}>
        {/* <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              Technology: {props.list.tech}
            </Typography>
            <Typography className={classes.title}>
              Project: {props.list.project}
            </Typography>
            <Typography>
            <a href="{props.list.description}" target="_blank"></a>
            </Typography>
          </CardContent>
        </Card> */}
           <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title}>
              Technology: {props.list.tech}
            </Typography>
            <Typography className={classes.title}>
              Project: {props.list.project}
            </Typography>
            <Typography>
            <a href="{props.list.description}" target="_blank">{props.list.description}</a>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default Grid;

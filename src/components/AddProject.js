import React, { useState } from "react";

import { connect } from "react-redux";
import { fetchAdd } from "../actions/addProject";

import NewProject from './NewProject'

import '../App.css'

import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    // AddProject: {
    //     width: 400
    // },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

const AddProject = props => {
  console.log(props.tech);
  const [state, setState] = React.useState({
    project:"",
    description:"",
    
  });

  //if checkbox will be true or false, it not, use value
  const handleChange = name => event => {
    const target = event.target
    setState({ ...state, 
        [name]: target.type === 'checkbox' ? target.checked : target.value });
  };

  console.log(state)

  const classes = useStyles();

  return (
    <>
      <div className="AddProject">
          <h1>Submit a new Project</h1>
        <form className={classes.container} noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="standard-required"
              label="Project name"
              className={classes.textField}
              margin="normal"
              onChange={handleChange("project")}
            value={state.project}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Github"
              className={classes.textField}
              margin="normal"
              onChange={handleChange("description")}
            value={state.description}
            />
          </div>
        </form>
        <h1>Check main functionalities used:</h1>
        <FormGroup row>
          <br></br>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.React}
                onChange={handleChange("React")}
                value="React"
                color="primary"
              />
            }
            label="React"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Redux}
                onChange={handleChange("Redux")}
                value="Redux"
                color="primary"
              />
            }
            label="Redux"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Responsive}
                onChange={handleChange("Responsive")}
                value="Responsive"
                color="primary"
              />
            }
            label="Responsive"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Backend}
                onChange={handleChange("Backend")}
                value="Backend"
                color="primary"
              />
            }
            label="Backend"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Database}
                onChange={handleChange("Database")}
                value="Database"
                color="primary"
              />
            }
            label="Database"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ReactHooks}
                onChange={handleChange("ReactHooks")}
                value="ReactHooks"
                color="primary"
              />
            }
            label="ReactHooks"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ReactClasses}
                onChange={handleChange("ReactClasses")}
                value="ReactClasses"
                color="primary"
              />
            }
            label="ReactClasses"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.LoginSessions}
                onChange={handleChange("LoginSessions")}
                value="LoginSessions"
                color="primary"
              />
            }
            label="LoginSessions"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.LoginCookies}
                onChange={handleChange("LoginCookies")}
                value="LoginCookies"
                color="primary"
              />
            }
            label="LoginCookies"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Register}
                onChange={handleChange("Register")}
                value="Register"
                color="primary"
              />
            }
            label="Register"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Forms}
                onChange={handleChange("Forms")}
                value="Forms"
                color="primary"
              />
            }
            label="Forms"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.MaterialUI}
                onChange={handleChange("MaterialUI")}
                value="MaterialUI"
                color="primary"
              />
            }
            label="MaterialUI"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.ReactStrap}
                onChange={handleChange("ReactStrap")}
                value="ReactStrap"
                color="primary"
              />
            }
            label="ReactStrap"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.HttpRequests}
                onChange={handleChange("HttpRequests")}
                value="HttpRequests"
                color="primary"
              />
            }
            label="HttpRequests"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Bcryptjs}
                onChange={handleChange("Bcryptjs")}
                value="Bcryptjs"
                color="primary"
              />
            }
            label="Bcryptjs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.jsonwebtoken}
                onChange={handleChange("jsonwebtoken")}
                value="jsonwebtoken"
                color="primary"
              />
            }
            label="jsonwebtoken"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Heroku}
                onChange={handleChange("Heroku")}
                value="Heroku"
                color="primary"
              />
            }
            label="Heroku"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.NodeJs}
                onChange={handleChange("NodeJs")}
                value="NodeJs"
                color="primary"
              />
            }
            label="NodeJs"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Sprint}
                onChange={handleChange("Sprint")}
                value="Sprint"
                color="primary"
              />
            }
            label="Sprint"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Postgresql}
                onChange={handleChange("Postgresql")}
                value="Postgresql"
                color="primary"
              />
            }
            label="Postgresql"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.Sqlite3}
                onChange={handleChange("Sqlite3")}
                value="Sqlite3"
                color="primary"
              />
            }
            label="Sqlite3"
          />
        </FormGroup>
      </div>
      <NewProject/>
    </>
  );
};
const mapStateToProps = state => {
  return {
    tech: state.techReducer.techs
  };
};

export default connect(mapStateToProps, { fetchAdd })(AddProject);

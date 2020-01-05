import React, { useState } from "react";

import { connect } from "react-redux";
import { fetchAdd } from "../actions/addProject";

import NewProject from "./NewProject";
import Nav from './Nav'

import "../App.css";

import Login from './Login'

import { withStyles } from "@material-ui/core/styles";
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
  
  const [state, setState] = React.useState({
    project: "",
    description: ""
  });

  //if checkbox will be true or false, it not, use value
  //   const handleChange = name => event => {
  //     const target = event.target
  //     setState({ ...state,
  //         [name]: target.type === 'checkbox' ? target.checked : target.value });
  //   };

  //return name
  const handleChange = name => event => {
    const target = event.target;
    setState({ ...state, [name]: target.value });
  };

  const handleSubmit = e => {
      e.preventDefault()
      props.fetchAdd(state)
      console.log(`handlesub`, state)
  }
        


  console.log(state);

  const classes = useStyles();

  const listStyle = {
    marginTop: "25vh"
  }

  return (
    <>
    <Nav/>
    
    <Login/>
    <div style={listStyle}>
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
              onChange={handleChange("github")}
              value={state.github}
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Description"
              className={classes.textField}
              margin="normal"
              onChange={handleChange("description")}
              value={state.description}
            />
          </div>

          <div>
        <button  onClick={handleSubmit}>Submit New Project</button>
        </div>

          <h1>Check main functionalities used:</h1>
          <FormGroup row>
            <br></br>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state.React}
                  onChange={handleChange("tech1")}
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
                  onChange={handleChange("tech2")}
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
                  onChange={handleChange("tech3")}
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
                  onChange={handleChange("tech4")}
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
                  onChange={handleChange("tech5")}
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
                  onChange={handleChange("tech6")}
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
                  onChange={handleChange("tech7")}
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
                  onChange={handleChange("tech8")}
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
                  onChange={handleChange("tech9")}
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
                  onChange={handleChange("tech10")}
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
                  onChange={handleChange("tech11")}
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
                  onChange={handleChange("tech12")}
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
                  onChange={handleChange("tech13")}
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
                  onChange={handleChange("tech14")}
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
                  onChange={handleChange("tech15")}
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
                  onChange={handleChange("tech16")}
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
                  onChange={handleChange("tech17")}
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
                  onChange={handleChange("tech18")}
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
                  onChange={handleChange("tech19")}
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
                  onChange={handleChange("tech20")}
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
        </form>
      </div>

      <NewProject />
     
      </div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    tech: state.techReducer.techs
  };
};

export default connect(
    mapStateToProps,
     { fetchAdd }
     )(AddProject);

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { postModal, mailerModal } from "../actions/modalAction";

//to redirect after message is sent, gives ContactModal access to routes
import {withRouter} from 'react-router'

import "../assets/css/modal.scss";

const useStyles = makeStyles(theme => ({



  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
   
  },
  paper: {
    backgroundColor: '#d6e6f3',
    color:'#486591',
    
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width:'400px',
   
    
  },
  top: {
    alignContent: "center",
    fortSize:"1.5rem"
  },
  
  textarea: {
    height: "150px",
    width:"100%"
  },
  input: {
    width:"100%"
  }
}));

const ContactModal= (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [contact, setContact] = useState([]);

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();
  
  //postModal is for Twilio, mailerModal is for nodemailer
  const eventHandler = event => {
    event.preventDefault();
    dispatch(mailerModal(contact));
    
  };

  const modalReducer = useSelector(state => state.modalReducer);

  if (modalReducer.isfetching === true) {
    return (
      <>
        <div className="spin">
          <div className="spinner"></div>
          <p>sending ...</p>
        </div>
      </>
    );
  }

  if (modalReducer.sentInfo.length != 0){
    return(
      <>
      <div className="messageSent">
        <h2>Message sent</h2>
      </div>
      </>
    )
  }

  return (
    <div>
      <h3 onClick={handleOpen}>
        Contact
      </h3>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.top}>
              <h1>Russell Terry</h1>
              <h1>Full Stack Developer</h1>
              <email>surfsol@protonmail.com</email>
              <h1>github.com/surfsol</h1>
            </div>
            <br></br>
            <div>
              <h2>Notify me by email:</h2>
              <br></br>
              <h2>
                <label for="your_name">Name</label>
                <br></br>
                <input
                className={classes.input}
                  type="text"
                  id="your_name"
                  placeholder="Name"
                  name="your_name"
                  value={contact.recipient}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for="phone">phone</label>
                <br></br>
                <input
                className={classes.input}
                  type="text"
                  id="phone"
                  placeholder="phone"
                  name="phone"
                  value={contact.message}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for="Email">Email</label>
                <br></br>
                <input
                className={classes.input}
                  type="text"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={contact.message}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for="Message">Message</label>
                <br></br>
                <textarea
                  className={classes.textarea}
                  type="text"
                  id="textmessage"
                  placeholder="message"
                  name="textmessage"
                  value={contact.textmessage}
                  onChange={handleChange}
                />
              </h2>
            </div>
            <button onClick={eventHandler}>Send</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default withRouter(ContactModal)
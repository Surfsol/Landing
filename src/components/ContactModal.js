import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { postModal } from "../actions/modalAction";

import "../assets/css/modal.scss";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  top: {
    alignContent: "center"
  },
  button: {
    background: "$sea1",
    color: "$sea2",
    fontSize: "2rem",
    fontFamily: "Bree Serif, serif"
  },
  textarea: {
    height: "150px"
  }
}));

export default function ContactModal() {
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

  const eventHandler = event => {
    event.preventDefault();
    dispatch(postModal(contact));
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

  return (
    <div>
      <h3 className={classes.button} onClick={handleOpen}>
        Contact Me
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
            </div>
            <br></br>
            <div>
              <h2>Notify me by email:</h2>
              <h2>
                <label for="Name">Name</label>
                <br></br>
                <input
                  type="text"
                  id="name"
                  placeholder="name"
                  name="name"
                  value={contact.name}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for="Email">Email</label>
                <br></br>
                <input
                  type="text"
                  id="email"
                  placeholder="email"
                  name="email"
                  value={contact.email}
                  onChange={handleChange}
                />
              </h2>
              <h2>
                <label for="Message">Message</label>
                <br></br>
                <textarea
                  className={classes.textarea}
                  type="text"
                  id="message"
                  placeholder="message"
                  name="message"
                  value={contact.message}
                  onChange={handleChange}
                />
              </h2>
            </div>
            <button onClick={eventHandler}>Send</button>

            {/* <h2 id="transition-modal-title">Email me a message.</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            */}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

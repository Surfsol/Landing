import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";



//import { Dropdown, Form } from "react-bootstrap";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "../assets/css/addCommentsModal.scss";

import { Link } from "react-router-dom";



const AddComments = props => {
  const [post, setPost] = useState([]);

  const [open, setOpen] = useState(false);
  

  console.log(`props addpost`,props)

  const changeHandler = event => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

 

  const handleSubmit = () => {

  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        + comments
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        //className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className="postModalWrap">
            <div className="postModal">
              <h3>Project</h3>

              <div className="senInput">
                <label for="Project">Project</label>

                <input
                  type="text"
                  id="project"
                  placeholder="project"
                  name="project"
                  value={post.project}
                  onChange={changeHandler}
                />
              </div>

              {/* <Dropdown.Toggle variant="success" id="dropdown-basic">
                Organization
              </Dropdown.Toggle>

              <Form.Control
                as="select"
                name="org_id"
                value={pump.org_id}
                onChange={changeHandler}
              >
                {orgReducer.map(org => (
                  <option key={org.id} value={org.id}>
                    {org.org_name}
                  </option>
                ))}
              </Form.Control> */}
              <div className="senInput">
                <label for="Country">Technology</label>

                <input
                  type="text"
                  id="tech_one"
                  placeholder="technology"
                  name="tech_one"
                  value={post.tech_one}
                  onChange={changeHandler}
                />
              </div>

              <div className="senInput">
                <label for="Name">Technology</label>

                <input
                  type="text"
                  id="tech_two"
                  placeholder="tech_two"
                  name="tech_two"
                  value={post.tech_two}
                  onChange={changeHandler}
                />
                 <div>
              <TextField
                required
                id="standard-required"
                label="Comment"
                margin="normal"
               onChange={changeHandler}
                value={post.comment}
                multiline //enables multiline typing
              />
            </div>

                <div className="buttonBox">
                  <button
                    className="submitBtn"
                    type="Submit"
                    onClick={handleSubmit}
                  >
                    Create Comment
                  </button>
                  <button
                    className="closeBtn"
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};
export default AddComments;

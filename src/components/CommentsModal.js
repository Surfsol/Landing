import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { useDispatch, useSelector } from "react-redux";

import { fetchComments } from "../actions/commentsAction";

import CommentsModalGrid from "./CommentsModalGrid";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5]
    //padding: theme.spacing(2, 4, 3),
  }
}));

export default function Comments(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    dispatch(fetchComments(project_id));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const project_id = props.item.id;

  const comments = useSelector(state => state.commentsReducer.comments);
  console.log(`commentsReducer`, comments);

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
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
            <h1>
              {comments.map(e => (
                <React.Fragment key={e.id}>
                  <CommentsModalGrid list={e} />
                </React.Fragment>
              ))}
            </h1>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

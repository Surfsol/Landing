import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button:{
      background: '$sea1',
      color: '$sea2',
      fontSize: '2rem',
      fontFamily: 'Bree Serif, serif',
  }
}));

export default function ContactModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [contact, setContact] = useState([])

  const handleChange = event => {
    setContact({ ...contact, [event.target.name]: event.target.value })
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <h2>
                <label for='Name'>Name</label>
                <br></br>
                <input
                  type='text'
                  id='name'
                  placeholder='name'
                  name='name'
                  value={contact.name}
                  onChange={handleChange}
                />
              </h2>
          
            <h2 id="transition-modal-title">Email me a message.</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
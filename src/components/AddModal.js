import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './styles.css'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    width:"40%",
    margin:'auto',
    outline:'none',
    borderRadius:'5px',
    boxShadow: theme.shadows[5],
    
  },
}));

export default function AddModal({open, handleClose}) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <h1 className = 'add-heading'>Add Book</h1>
          <form className = "add-form" >
              <div className = "mid-div">
              <input className = 'add-field'
             type="text" placeholder="Id"/>
            <input className = 'add-field' 
             type="text" placeholder="Title"/>
              </div>
              <div className = "mid-div">
              <input className = 'add-field'
             type="text" placeholder="Author"/>
            <input className = 'add-field'
             type="text" placeholder="Published Year"/>
             </div><br/>
             <div className = "mid-div">
             <button onClick = {handleClose} className = "add-button">Add</button>
             <button onClick = {handleClose} style ={{background:'black', color:'white'}}className = "add-button">Cancel</button>
             </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
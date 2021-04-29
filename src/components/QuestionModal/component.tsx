import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Question } from '../../interfaces';
import parse from 'html-react-parser';
import { Scrollbars } from 'react-custom-scrollbars';

const useStyles = makeStyles((theme) => ({
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
}));

interface Props {
  open: boolean;
  handleClose: () => void;
  question?: Question
}

const QuestionModal: React.FC<Props> = ({ open, handleClose, question }) => {
  const classes = useStyles();

  return (
    <div>
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
            <h2 id="transition-modal-title">{question?.title}</h2>
            <Scrollbars style={{ height: 300, width: '100%' }}>
              { question ? parse(question.body) : null }
            </Scrollbars>
            <p id="transition-modal-description">{question?.link}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default QuestionModal;
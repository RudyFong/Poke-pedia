import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    height: '100%',
    width: '100%',
  },
}));

export default function SimpleBackdrop(props) {
  const {showSpinner} = props;
  const classes = useStyles();
  const [setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Backdrop className={classes.backdrop} open={showSpinner} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
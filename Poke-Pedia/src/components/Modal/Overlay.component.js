import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default class  GenericOverlay extends React.Component{
  // const classes = useStyles();
  constructor(props){
    super(props);
    this.state = {
      visible: this.props.visible,
    }
  }


  // const [state, setState] = React.useState({
  // })
  // const [open, setOpen] = React.useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState('sm');

  // handleClickOpen = () => {
  //   setOpen(true);
  // };

  // handleClose = () => {
  //   setOpen(false);
  // };

  //  handleMaxWidthChange = (event) => {
  //   setMaxWidth(event.target.value);
  // };

  // handleFullWidthChange = (event) => {
  //   setFullWidth(event.target.checked);
  // };
  hideModal = () => {
    this.setState({visible: false});
  }
  componentDidUpdate(prevProps) {
    if(this.props.visible !== prevProps.visible){
      this.setState({visible:!this.state.visible});
    }
  }
  render(){
  const {title = '', children, closeBackdropClick = false, backdrop = false, closeEscapeKeyDown = false, customStyle={}} = this.props;
  const {visible} = this.state;
  return (
    // <React.Fragment>
      <Dialog
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
        style={customStyle}
        open={this.state.visible}
        onClose={this.hideModal}
        aria-labelledby="max-width-dialog-title"
        disableBackdropClick={closeBackdropClick}
        hideBackdrop={backdrop}
        disableEscapeKeyDown={closeEscapeKeyDown}
      >
        <DialogTitle id="max-width-dialog-title">{title}</DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.hideModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    // </React.Fragment>
  );
  }
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { Typography, DialogContent } from '@material-ui/core';

const useStyles = makeStyles({
  size: {
    width: 'auto',
    height: 'auto'
  }
});

function BTDialog(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment >
      <Dialog open={props.open}  onClose={props.onClose} className={classes.size}>        
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </Dialog>

    </React.Fragment>
  );
}
export default BTDialog;

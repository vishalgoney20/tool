import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: '#38888b',
      color: '#FFFFFF'
    },
    textTransform: 'none',
    borderRadius: 6,
    backgroundColor: '#38888b',
    color: '#FFFFFF',
    fontFamily: 'Roboto Condensed',
    fontSize: 16,
    textAlign: 'center',
    height:50,
    width:200
  }
});


function BTButton(props) {
  const classes = useStyles();
  return (
    <Button className={classes.root}
              // fullWidth
              onClick={props.onClick}
              variant="contained"  >{props.value}</Button>
  );
}

export default BTButton

import React from 'react'

//imports for Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';


const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: 'transparent',
    boxShadow: 'none'
  },
  typo: {
    fontSize: '42px',
    color: "#FFF"
  }
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="relative">
        <Typography className={classes.typo} variant="h1">
          Watch Your Video
        </Typography>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(Header);

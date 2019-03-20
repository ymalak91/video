import React from 'react'

//imports for Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "16px",
    textAlign: 'center',
    color: '#000',
    boxShadow: 'none',
    borderRadius: '0',
    backgroundColor: '#FAFAFA'
  },
});

function MainLayout(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container >
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            page Content
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(MainLayout);

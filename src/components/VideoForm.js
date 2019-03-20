import React, { Component } from 'react'


//imports for Material UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    width: '100%'
  },
});

export class VideoForm extends Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className="video-form" autoComplete="off">
          <TextField
            required
            error={false}
            id="LinkTextField"
            label="Paste your link here"
            placeholder="Paste your link here"
            className={classNames(classes.textField, "textfield-styles")}
            margin="normal"
          />
          <Button variant="contained" className="button-styles">
            Go
          </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(VideoForm);

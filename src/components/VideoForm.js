import React, { Component } from 'react'


//imports for Material UI
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

//import components
import VideoLoader from './VideoLoader';
import History from './History';

const styles = theme => ({
  textField: {
    width: '100%'
  },
});

export class VideoForm extends Component {

  constructor(props) {
    super(props);
    // history will store the links that the user insert
    // validLink true if the link is valid, false if the link is not valid
    // error will give an error message
    // linkValue contains the value of the input link field
    this.state = {
      history: [],
      validLink: false,
      linkValue: "",
      error: ""
    }
  }

  changelink = (e) => {
    this.setState({
      linkValue: e.target.value
    });
  }

  loadVideo = (e) => {
    e.preventDefault();
    const link = e.target.videoLink.value;
    //check the length of a link (should not be too short)
    //and no space
    //and must have at leaste one "." (dot)
    if ((link.length >= 7) && (link.indexOf(' ') === -1) && (link.indexOf('.') > "-1")) {

      this.setState({
        error: "",
        validLink: true,
        linkValue: "",
        history: [link, ...this.state.history]
      }, () => {

        //console.log("load new video");
        //console.log(this.state.history);
      });
    } else {
      this.setState({
        error: "check link lenght or remove spaces or add dot",
        validLink: false,
      });
      return

    }
  }
  sendLink = () => {
    let VideoSrc = "http://media.w3.org/2010/05/bunny/movie.mp4";
    if (this.state.history.length) {
      const hist = this.state.history;
      VideoSrc = hist[0];
    }
    return VideoSrc
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <form className="video-form" autoComplete="off" onSubmit={this.loadVideo}>
          <TextField
            required
            name="videoLink"
            value={this.state.linkValue}
            onChange={this.changelink}
            error={false}
            id="LinkTextField"
            label="Paste your link here"
            placeholder="Paste your link here"
            className={classNames(classes.textField, "textfield-styles")}
            margin="normal"
          />
          <p className="formError">{this.state.error}</p>
          <Button type="submit" variant="contained" className="button-styles">
            Go
          </Button>
        </form>
        {/* <VideoLoader videoLink={this.state.history[0]}/> */}
        <VideoLoader videoLink={this.sendLink} />
        <History historyLinks={this.state.history} />
      </div>
    )
  }
}

export default withStyles(styles)(VideoForm);

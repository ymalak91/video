import React, { Component } from 'react';

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton
} from 'video-react';

export class VideoLoader extends Component {
  constructor(props) {
    super(props);
    //console.log(props.videoLink);
    this.state = {
      link: props.videoLink(),
      type: props.type
    }

  }

  printVideo = () => {
    let player =
      <div>
        <Player key={this.props.videoLink()}>
          <source src={this.props.videoLink()} />
          <ControlBar>
            <ReplayControl seconds={10} order={1.1} />
            <ForwardControl seconds={10} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <PlaybackRateMenuButton rates={[2, 1, 0.5]} order={7.1} />
            <VolumeMenuButton />
          </ControlBar>
        </Player>
      </div>

    return player
  }

  printFrame = () => {
    let linkSrc = this.props.videoLink();
    var secondArg = linkSrc.indexOf('&');
    var firstArg = linkSrc.indexOf('?');
    if (secondArg != -1) {
      linkSrc = linkSrc.substring(firstArg + 3, secondArg);
    } else {
      linkSrc = linkSrc.substring(firstArg + 3);
    }
    // console.log(firstArg, secondArg, linkSrc);

    let iframe = <div>
      <iframe
        title="as"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + linkSrc}
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>

    return iframe
  }

  render() {
    // console.log(this.state.link);
    return (
      <div className="video-wrapper">
        <p>{this.props.videoLink()} </p>
        <p>{this.props.type()} </p>
        {this.state.type() === "youtube" && this.printFrame()}
        {this.state.type() === "others" && this.printVideo()}
      </div>
    )
  }
}

export default VideoLoader

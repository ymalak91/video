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
  render() {
    return (
      <div className="video-wrapper">
        <Player poster="/assets/poster.png">
          <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
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
    )
  }
}

export default VideoLoader

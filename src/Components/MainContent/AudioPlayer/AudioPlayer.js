import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = (props) => (
  <AudioPlayer
    autoPlayAfterSrcChange={false}
    src={props.audio}
    volume={0.5}
    showJumpControls={false}
    customControlsSection={[]}
    customProgressBarSection={
      [
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.CURRENT_TIME,
        RHAP_UI.PROGRESS_BAR,
        RHAP_UI.DURATION,
        RHAP_UI.VOLUME_CONTROLS,
      ]
    }
  />
);

export default Player;

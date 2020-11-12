import React, { useState } from 'react';
import pauseIcon from '../../assets/images/icons/pause-icon.svg';
import playIcon from '../../assets/images/icons/play-icon.svg';
import playNextIcon from '../../assets/images/icons/play-next-icon.svg';
import playPreviousIcon from '../../assets/images/icons/play-previous-icon.svg';

import useAudio from '../../hooks/useAudio';
import displayTime from '../../helpers/displayTime';
import { Container, Button, RangeInput, FlexDiv, Span } from './styles';

const ControlPanel = ({
  audioList,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio,
  audioRef,
  audioNode
}) => {
  const { duration, currentTime, setSelectedTime } = useAudio(activeAudioId, audioNode);

  const DEFAULT_VOLUME = 0.5;
  const [volume, setVolume] = useState(DEFAULT_VOLUME);

  const currentAudioIndex = audioList.findIndex((audio) => audio._id === activeAudioId);
  const currentAudioLink = currentAudioIndex !== -1 ? audioList[currentAudioIndex].link : null;

  const setPreviousAudio = () => {
    if (currentAudioIndex === 0) {
      updateActiveAudioId(audioList[audioList.length - 1]._id)
    } else {
      updateActiveAudioId(audioList[currentAudioIndex - 1]._id);
    }
    playAudio();
  }

  const setNextAudio = () => {
    if (currentAudioIndex === audioList.length - 1) {
      updateActiveAudioId(audioList[0]._id);
    } else {
      updateActiveAudioId(audioList[currentAudioIndex + 1]._id);
    }
    playAudio();
  }

  const updateVolume = (e) => {
    audioNode.volume = e.target.value;
    setVolume(e.target.value)
  }

  const updateSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  }

  const playOrPauseHandler = () => {
    pauseOrPlayAudio();
    if (activeAudioId == null) {
      updateActiveAudioId(audioList[0]._id);
      playAudio();
    }
  }

  if(audioNode){
    audioNode.addEventListener('ended', setNextAudio)
  }

  const playOrPauseIcon = !audioNode ? null : audioNode.paused ? playIcon : pauseIcon;

  return (
    <Container>
      <FlexDiv>
        <Button onClick={setPreviousAudio}>
          <img src={playPreviousIcon} alt="Next Song" />
        </Button>
        <Button onClick={playOrPauseHandler}>
          <img src={playOrPauseIcon} alt="Play / Pause Song" />
        </Button>
        <Button onClick={setNextAudio}>
          <img src={playNextIcon} alt="Next Song" />
        </Button>
      </FlexDiv>
      <FlexDiv>
        <FlexDiv>
          <Span>{displayTime(currentTime)}</Span>
          <RangeInput
            timeStampInput
            type="range"
            min="0"
            step={duration / 100}
            max={duration}
            value={currentTime}
            onChange={updateSelectedTime} />
          <Span>{displayTime(duration)}</Span>
        </FlexDiv>
        <FlexDiv>
          <Span>Volume</Span>
          <RangeInput
            volumeInput
            type="range"
            step='0.01'
            min="0"
            max="1"
            value={volume}
            onChange={updateVolume} />
          <audio src={currentAudioLink}
            id="audio"
            ref={audioRef}
            preload="metadata"></audio>
        </FlexDiv>
      </FlexDiv>
    </Container>
  )
}

export default ControlPanel;
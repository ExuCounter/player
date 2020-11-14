import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import pauseIcon from '../../assets/images/icons/pause-icon.svg';
import playIcon from '../../assets/images/icons/play-icon.svg';
import playNextIcon from '../../assets/images/icons/play-next-icon.svg';
import playPreviousIcon from '../../assets/images/icons/play-previous-icon.svg';
import { Container, Button, RangeInput, FlexDiv, Span } from './styles';
import useAudio from '../../hooks/useAudio';
import displayTime from '../../helpers/displayTime';

const ControlPanel = ({
  audioList,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio,
  audioRef,
  audioNode,
}) => {
  const {
    duration,
    currentTime,
    volume,
    setSelectedTime,
    setVolume,
  } = useAudio(activeAudioId, audioNode);

  const currentAudioIndex = audioList.findIndex(
    (audio) => audio._id === activeAudioId
  );
  const currentAudioLink =
    currentAudioIndex !== -1 ? audioList[currentAudioIndex].link : null;

  const setPreviousAudio = useCallback(() => {
    if (currentAudioIndex === 0) {
      updateActiveAudioId(audioList[audioList.length - 1]._id);
    } else {
      updateActiveAudioId(audioList[currentAudioIndex - 1]._id);
    }
    playAudio();
  }, [currentAudioIndex, audioList, playAudio, updateActiveAudioId]);

  const setNextAudio = useCallback(() => {
    if (currentAudioIndex === audioList.length - 1) {
      updateActiveAudioId(audioList[0]._id);
    } else {
      updateActiveAudioId(audioList[currentAudioIndex + 1]._id);
    }
    playAudio();
  }, [currentAudioIndex, audioList, playAudio, updateActiveAudioId]);

  const updateVolume = (e) => {
    audioNode.volume = e.target.value;
    setVolume(e.target.value);
  };

  const updateSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  };

  const playOrPauseHandler = () => {
    pauseOrPlayAudio();
    if (activeAudioId === null) {
      updateActiveAudioId(audioList[0]._id);
      playAudio();
    } else if (currentTime === duration) {
      setNextAudio();
    }
  };

  useEffect(() => {
    if (!audioNode) return false;
    audioNode.addEventListener('ended', setNextAudio);

    return () => {
      audioNode.removeEventListener('ended', setNextAudio);
    };
  }, [audioNode, activeAudioId, setNextAudio]);

  const playOrPauseIcon = !audioNode
    ? null
    : audioNode.paused
    ? playIcon
    : pauseIcon;

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
            type="range"
            min="0"
            step={duration / 100}
            max={duration}
            value={currentTime}
            onChange={updateSelectedTime}
          />
          <Span>{displayTime(duration)}</Span>
        </FlexDiv>
        <FlexDiv>
          <Span>Volume</Span>
          <RangeInput
            type="range"
            step="0.01"
            min="0"
            max="1"
            value={volume}
            onChange={updateVolume}
          />
          <audio
            src={currentAudioLink}
            id="audio"
            ref={audioRef}
            preload="metadata"
          ></audio>
        </FlexDiv>
      </FlexDiv>
    </Container>
  );
};

ControlPanel.propTypes = {
  audioList: PropTypes.array,
  activeAudioId: PropTypes.string,
  updateActiveAudioId: PropTypes.func,
  pauseOrPlayAudio: PropTypes.func,
  playAudio: PropTypes.func,
  audioRef: PropTypes.object,
  audioNode: PropTypes.object,
};

export default ControlPanel;

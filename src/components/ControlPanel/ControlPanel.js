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

  const filteredAudioList = audioList.filter((audio) => audio.show === true);
  const currentFilteredAudioIndex = filteredAudioList.indexOf(
    audioList[currentAudioIndex]
  );

  const setPreviousAudio = useCallback(() => {
    if (filteredAudioList.length === 0) return false;
    if (currentFilteredAudioIndex === 0) {
      updateActiveAudioId(filteredAudioList[filteredAudioList.length - 1]._id);
    } else {
      updateActiveAudioId(filteredAudioList[currentFilteredAudioIndex - 1]._id);
    }
  }, [updateActiveAudioId, currentFilteredAudioIndex, filteredAudioList]);

  const setNextAudio = useCallback(() => {
    if (filteredAudioList.length === 0) return false;
    if (currentFilteredAudioIndex === filteredAudioList.length - 1) {
      updateActiveAudioId(filteredAudioList[0]._id);
    } else {
      updateActiveAudioId(filteredAudioList[currentFilteredAudioIndex + 1]._id);
    }
  }, [updateActiveAudioId, currentFilteredAudioIndex, filteredAudioList]);

  const updateVolume = (e) => {
    audioNode.volume = e.target.value;
    setVolume(e.target.value);
  };

  const updateSelectedTime = (e) => {
    setSelectedTime(e.target.value);
  };

  const playOrPauseHandler = () => {
    pauseOrPlayAudio();
    if (activeAudioId === null && filteredAudioList.length) {
      updateActiveAudioId(filteredAudioList[0]._id);
      playAudio();
    } else if (currentTime === duration && currentTime > 0) {
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

  const currentSongInfo = activeAudioId
    ? `${audioList[currentAudioIndex].author} - ${audioList[currentAudioIndex].name}`
    : null;

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
            step="0.1"
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
        <FlexDiv>
          <Span>{currentSongInfo}</Span>
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

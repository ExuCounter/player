import React from 'react';
import PropTypes from 'prop-types';
import PlayListItem from './PlayListItem/PlayListItem';
import { Container } from './styles';

const PlayList = ({
  audioList,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio,
}) => {
  return (
    <Container>
      {audioList.map((audio) => (
        <PlayListItem
          updateActiveAudioId={updateActiveAudioId}
          pauseOrPlayAudio={pauseOrPlayAudio}
          activeAudioId={activeAudioId}
          playAudio={playAudio}
          key={audio._id}
          audio={audio}
        />
      ))}
    </Container>
  );
};

PlayList.propTypes = {
  audioList: PropTypes.array,
  activeAudioId: PropTypes.string,
  updateActiveAudioId: PropTypes.func,
  pauseOrPlayAudio: PropTypes.func,
  playAudio: PropTypes.func,
};

export default PlayList;

import React from 'react';
import PlayListItem from './PlayListItem/PlayListItem';
import { Container } from './styles';

const PlayList = ({
  audioList,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio }) => {

  return (
    <Container>
      {
        audioList.map(audio => (
          <PlayListItem
            updateActiveAudioId={updateActiveAudioId}
            pauseOrPlayAudio={pauseOrPlayAudio}
            activeAudioId={activeAudioId}
            playAudio={playAudio}
            key={audio._id}
            audio={audio} />
        ))
      }
    </Container>
  )
}

export default PlayList;
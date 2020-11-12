import React, { useState } from 'react';
import { Item, Span } from './styles';
import displayTime from '../../../helpers/displayTime';

const PlayListItem = ({
  audio,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio }) => {
    
  const [duration, setDuration] = useState(0);
  if (!audio.show) return null;

  const currentAudio = new Audio(audio.link);
  currentAudio.addEventListener('loadedmetadata', () => {
    setDuration(currentAudio.duration)
  })

  const selectAudioHandler = () => {
    updateActiveAudioId(audio._id)
    if (audio._id === activeAudioId) {
      pauseOrPlayAudio();
    }
    else {
      playAudio();
    }
  }

  return (
    <Item
      active={activeAudioId === audio._id}
      onClick={selectAudioHandler}>
      <Span author="true">{audio.author} -</Span>
      <Span name="true">{audio.name}</Span>
      <Span duration="true">{displayTime(duration)}</Span>
    </Item>
  )
}

export default PlayListItem;
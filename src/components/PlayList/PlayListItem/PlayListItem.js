import React, { useState, useEffect } from 'react';
import { Item, Span } from './styles';
import displayTime from '../../../helpers/displayTime';

const PlayListItem = ({
  audio,
  activeAudioId,
  updateActiveAudioId,
  pauseOrPlayAudio,
  playAudio }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const updateDuration = (callback) => {
      const currentAudio = new Audio(audio.link);
      currentAudio.addEventListener('loadedmetadata', ()=>setDuration(currentAudio.duration))
      return () => {
        currentAudio.removeEventListener('loadedmetadata', ()=>setDuration(currentAudio.duration))
      }
    }
    updateDuration();
  }, [audio.link])

  if (!audio.show) return null;

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
      <Span styling='author'>{audio.author} -</Span>
      <Span styling='name'>{audio.name}</Span>
      <Span styling='duration'>{displayTime(duration)}</Span>
    </Item>
  )
}

export default PlayListItem;
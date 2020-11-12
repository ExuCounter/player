import { useState, useEffect } from 'react';

const useAudio = (activeAudioId, audioNode) => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  if(selectedTime){
    audioNode.currentTime = selectedTime;
    setCurrentTime(selectedTime);
    setSelectedTime(null);
  }

  useEffect(() => {
    if(!audioNode) return false;
    const setAudioData = () => {
      setDuration(audioNode.duration);
      setCurrentTime(audioNode.currentTime);
    }

    const setAudioCurrentTime = () => {
      setCurrentTime(audioNode.currentTime);
    }

    audioNode.addEventListener('loadedmetadata', setAudioData);
    audioNode.addEventListener('timeupdate', setAudioCurrentTime);

    return ()=>{
      audioNode.removeEventListener('loadedmetadata', setAudioData);
      audioNode.removeEventListener('timeupdate', setAudioCurrentTime);
    }

  }, [audioNode, activeAudioId]);

  return {
    duration,
    currentTime,
    setSelectedTime,
    setCurrentTime
  }
}

export default useAudio;
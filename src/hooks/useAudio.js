import { useState, useEffect } from 'react';

const useAudio = (activeAudioId, audioNode) => {
  const DEFAULT_VOLUME = 0.5;
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (!audioNode) return false;

    if (selectedTime) {
      audioNode.currentTime = selectedTime;
      setCurrentTime(selectedTime);
      setSelectedTime(null);
    }

    const setAudioData = () => {
      setDuration(audioNode.duration);
      setCurrentTime(audioNode.currentTime);
    };

    const setAudioCurrentTime = () => {
      setCurrentTime(audioNode.currentTime);
    };

    audioNode.addEventListener('loadedmetadata', setAudioData);
    audioNode.addEventListener('timeupdate', setAudioCurrentTime);

    return () => {
      audioNode.removeEventListener('loadedmetadata', setAudioData);
      audioNode.removeEventListener('timeupdate', setAudioCurrentTime);
    };
  }, [audioNode, activeAudioId, selectedTime]);

  return {
    duration,
    currentTime,
    volume,
    setSelectedTime,
    setCurrentTime,
    setVolume,
  };
};

export default useAudio;

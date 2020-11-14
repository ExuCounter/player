import React, { useState, useEffect, useRef } from 'react';
import dummyData from '../../data/data';
import ControlPanel from '../../components/ControlPanel/ControlPanel';
import PlayList from '../../components/PlayList/PlayList';
import Header from '../../components/Header/Header';

const App = () => {
  const [audioList, setAudioList] = useState([]);
  const [activeAudioId, setActiveAudioId] = useState(null);

  const audioRef = useRef(null);
  const audioNode = audioRef.current;

  useEffect(() => {
    if (Array.isArray(dummyData)) {
      setAudioList(dummyData);
    }
  }, []);

  const updateActiveAudioId = (audioId) => {
    setActiveAudioId(audioId);
  };

  const updateAudioList = (list) => {
    setAudioList(list);
  };

  const pauseOrPlayAudio = () => {
    audioNode.paused ? audioNode.play() : audioNode.pause();
  };

  const playAudio = () => {
    audioNode.addEventListener('loadedmetadata', () => {
      audioNode.play();
    });
  };

  return (
    <>
      <Header audioList={audioList} updateAudioList={updateAudioList} />
      <PlayList
        audioList={audioList}
        activeAudioId={activeAudioId}
        updateActiveAudioId={updateActiveAudioId}
        pauseOrPlayAudio={pauseOrPlayAudio}
        playAudio={playAudio}
        audioNode={audioNode}
      />
      <ControlPanel
        audioList={audioList}
        activeAudioId={activeAudioId}
        updateActiveAudioId={updateActiveAudioId}
        pauseOrPlayAudio={pauseOrPlayAudio}
        playAudio={playAudio}
        audioRef={audioRef}
        audioNode={audioNode}
      />
    </>
  );
};

export default App;

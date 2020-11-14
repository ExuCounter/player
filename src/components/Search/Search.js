import React from 'react';
import { Input } from './styles';

const Search = ({ audioList, updateAudioList }) => {
  const searchHandler = (e) => {
    if (e.target.value.length >= 3) {
      const newList = audioList.map((audio) => {
        if (
          audio.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
            -1 ||
          audio.author.toLowerCase().indexOf(e.target.value.toLowerCase()) !==
            -1
        ) {
          audio.show = true;
        } else {
          audio.show = false;
        }
        return audio;
      });
      updateAudioList(newList);
    } else {
      const newList = audioList.map((audio) => {
        audio.show = true;
        return audio;
      });
      updateAudioList(newList);
    }
  };

  return (
    <Input
      type="text"
      placeholder="Search Music Here"
      onChange={searchHandler}
    />
  );
};

export default Search;

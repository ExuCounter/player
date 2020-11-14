import React from 'react';
import Search from '../Search/Search';
import { HeaderContainer } from './styles';

const Header = ({ audioList, updateAudioList }) => {
  return (
    <HeaderContainer>
      <Search audioList={audioList} updateAudioList={updateAudioList} />
    </HeaderContainer>
  );
};

export default Header;

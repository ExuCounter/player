import styled from 'styled-components';

const Container = styled.ul`
  overflow-y: scroll;
  height: calc(100vh - 9.5rem);
  max-width: 28rem;
  list-style: none;
  padding: 0.6rem;
  margin: 0.6rem;
  background-color: #3a2828;
  ::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 0.6rem;
    margin-right: 0.2rem;
    border-radius: 0.6rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #444444;
    height: 3rem;
    border-radius: 0.6rem;
  }
`;

export { Container };

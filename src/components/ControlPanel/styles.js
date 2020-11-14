import styled from 'styled-components';

const Container = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  border: none;
  padding: 0.3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0.6rem;
  z-index: 2;
  img {
    width: 1.75rem;
    height: 1.75rem;
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  padding: 0.3rem;
  cursor: pointer;
  outline: none;
  img {
    width: 1.35rem;
  }
`;

const Span = styled.span`
  display: block;
  padding: 0rem 1rem;
`;

const RangeInput = styled.input`
  cursor: pointer;
  &::-webkit-slider-runnable-track {
    height: 0.2rem;
    width: 100%;
    background: #b1b1b1;
  }
  &::-webkit-slider-thumb {
    background-color: #434343;
    color: #434343;
    margin-top: -0.35rem;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export { Container, Button, RangeInput, FlexDiv, Span };

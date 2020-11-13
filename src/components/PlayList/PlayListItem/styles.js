import styled from 'styled-components';

const Item = styled.li`
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: ${props => props.active ? '#d7cbcb' : '#FFF'};
  color: ${props => props.active ? '#FFF' : '#000'};
  margin-bottom: 0.6rem;
  display: flex;
  position: relative;
  z-index: 1;
  &:last-child{
    margin-bottom: 0rem;
  }
  li{
    color: ${props => props.active ? '#FFF !important' : 'inherit'}
  }
`;

const Span = styled.span`
  display: block;
  font-size: 0.9rem;
  margin-left: ${props => props.styling === 'duration' ? 'auto' : '0rem'};
  color: ${props => props.styling === 'author' ? '#574d4d' : props.styling === 'name' ? '#897b7b' : '#4f3125'};
  &:nth-child(1){
    margin-right: 0.3rem;
  }
`;

export {
  Item,
  Span
}
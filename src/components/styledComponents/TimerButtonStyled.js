import styled from 'styled-components';

const TimerButtonStyled = styled.button`
  font-size: 1.5rem;
  color: white;
  background: none;
  background-color: none;
  border: solid 0.1rem white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  min-height: 4rem;
  min-width: 4rem;

  transition: background-color 0.3s;
  :hover {
    background-color: ${props => props.red ? "rgb(255, 51, 51, 0.2)" : "rgb(255, 255, 255, 0.2)"};
    transition: background-color 0.3s;
  }
`;

export default TimerButtonStyled;
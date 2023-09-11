import { styled } from 'styled-components';
import { getRandomHexColor } from '../GlobalStyle';

export const StatDiv = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 100%;
  width: 360px;
  padding: 24px;

  background-color: rgb(231, 231, 229);
  border-radius: 4px;
  box-shadow: 10px 10px 18px -12px #000000;
  background: #343541;
`;

export const Title = styled.h3`
  margin-bottom: 24px;

  text-align: center;
  color: #ecf0f3;
  font-family: 'Roboto';
  font-size: 20px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 250ms linear;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const StatList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  background-color: ${props => getRandomHexColor(props.index)};
  cursor: pointer;
  transition: transform 250ms linear;

  :hover,
  :focus {
    transform: scale(1.25);
  }
`;

export const Label = styled.span`
  font-size: 16px;
  color: black;
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;

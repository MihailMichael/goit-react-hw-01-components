import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 24px;
  margin: 0 auto;
  padding: 16px 32px;
  max-width: 100%;
  width: 420px;
  border-radius: 4px;
  background-color: #343541;
  color: #dee0e0;
  box-shadow: 10px 10px 18px -12px #000000;
  font-weight: 600;
  cursor: pointer;

  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  :hover {
    background-color: #ecf0f3;
    box-shadow: inset -3px -3px 7px #3f4c6b, inset 3px 3px 5px #000000;
    color: #3f4c6b;
  }
`;

export const Status = styled.span`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 8px;
  box-shadow: -3px -3px 7px #3f4c6b, 3px 3px 5px #000000;
`;

export const Name = styled.p`
  margin-left: 16px;
  font-size: 20px;
  font-weight: 700;
`;

import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  background-color: rgb(231, 231, 229);
  border-radius: 4px;
  box-shadow: 10px 10px 18px -12px #000000;
  background: #343541;
  cursor: pointer;
  transition: transform 250ms linear;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 32px 0;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 160px;
  border-radius: 50%;

  box-shadow: -3px -3px 7px #3f4c6b, 3px 3px 5px #000000;
  transition: background-color 250ms linear, box-shadow 250ms linear;
  :hover {
    background-color: #ecf0f3;
    box-shadow: inset -3px -3px 7px #3f4c6b, inset 3px 3px 5px #000000;
  }
`;

export const UserName = styled.p`
  color: #ecf0f3;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 700;
  padding: 8px 0;
`;

export const Tag = styled.p`
  color: #ffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const Location = styled.p`
  color: #ffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const StatsInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  color: #ecf0f3;
  padding: 12px;
  text-align: center;
  border-top: 1px dotted #ecf0f3;

  :not(:last-child) {
    border-right: 1px dotted #ecf0f3;
  }

  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear, border-style 250ms linear;

  :hover {
    background-color: #ecf0f3;
    box-shadow: inset -3px -3px 7px #3f4c6b, inset 3px 3px 5px #000000;
    color: #000000;
    border-style: none;
  }
`;

export const Label = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
`;

export const Quantity = styled.span`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline dotted;
`;
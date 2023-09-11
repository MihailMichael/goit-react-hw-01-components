import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  border-radius: 4px;
  background-color: #343541;
  max-width: 80%;
  width: 80%;
`;

export const Thead = styled.thead`
  color: #dee0e0;
  font-family: 'Roboto';
  font-size: 16px;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  cursor: text;
  box-shadow: -2px -2px 4px #3f4c6b, 2px 2px 4px #000000;
  transition: background-color 250ms linear, box-shadow 250ms linear,
    color 250ms linear;
  :hover {
    background-color: #ecf0f3;
    box-shadow: inset -2px -2px 4px #3f4c6b, inset 2px 2px 4px #000000;
    color: #3f4c6b;
  }
`;

export const ItemRow = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? '#a7abaf' : 'transparent'};
`;

export const Th = styled.th`
  text-align: left;
  padding: 8px 8px;
  :not(:last-child) {
    border-right: 1px dotted #ecf0f3;
  }
`;

export const Tbody = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  font-size: 14px;
  color: black;
  padding-left: 16px;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;
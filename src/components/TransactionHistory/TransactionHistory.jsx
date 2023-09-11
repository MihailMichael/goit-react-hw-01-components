import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Type,
  ItemRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>

      <Tbody>
        {transactions.map((transaction, i) => {
          return (
            <TableRow
              key={transaction.id}
              id={transaction.id}
              type={transaction.type}
              currency={transaction.currency}
              amount={transaction.amount}
              index={i}
            />
          );
        })}
      </Tbody>
    </Table>
  );
};

const TableRow = ({ index, type, amount, currency }) => {
  return (
    <ItemRow idx={index}>
      <Type>{type}</Type>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </ItemRow>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
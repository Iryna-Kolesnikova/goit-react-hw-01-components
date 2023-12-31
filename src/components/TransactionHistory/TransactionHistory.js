import {Table, Thead, Tr, Th, Tbody, Td} from './TransactionHistory.styled'
  
export const TransactionHistory = ({ items }) => {
  return (<Table className="transaction-history">
    <Thead>
      <Tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </Tr>
    </Thead>
    <Tbody>
      {items.map(({ id, type, amount, currency }) => (
        <Tr key={id}>
          <Td>{type}</Td>
          <Td>{amount}</Td>
          <Td>{currency}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>)
};
import styled from 'styled-components';

export const Table = styled.table`
margin-left: auto;
margin-right: auto;
margin-top: 80px;
width: 600px;
background-color: ;
box-shadow:  0px 5px 10px 2px rgba(34, 60, 80, 0.2);
border: 1px solid;
border-radius: 10px;
border-color: rgba(225, 231, 231, 0.559);
`;
export const Thead = styled.thead`
background-color: rgb(165, 241, 241);
box-shadow:  0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
export const Tr = styled.tr`
&:nth-child(even) {
background-color:  rgba(225, 231, 231, 0.559);
;`;
export const Th = styled.th`
padding: 15px;
text-align: center;
text-transform: uppercase;`;
export const Td = styled.td`
padding: 15px;
border: 1px solid;

border-color: rgba(225, 231, 231, 0.559);
`;
export const Tbody = styled.tbody`
text-align: center;
text-transform: capitalize;
`;

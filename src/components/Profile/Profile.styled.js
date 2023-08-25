import styled from 'styled-components';

export const CardWraper = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 80px;
margin-bottom: 20px;
border-radius: 10px;
background-color: white;
width: 300px;
box-shadow:  0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;

export const Image = styled.img`
margin-left: auto;
margin-right: auto;
border-radius: 50%;
height: 150px;
width: 150px;
border: 1px solid;
border-color: black;
`;
export const PageWraper = styled.div`
display: flex;
alignItems: 'center';
justifyContent: 'center';
background-color:  rgba(225, 231, 231, 0.559);
`;
export const StatsList = styled.ul`
display: flex;
text-align: center;
background-color: whitesmoke;
`;
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding: 20px;
flex-basis: calc((100%) / 3);
border: 1px solid;
border-color: rgba(225, 231, 231, 0.559);
`;
export const Description = styled.div`
text-align: center;
padding: 20px;
`;
export const Username = styled.p`
font-weight: bold;`;
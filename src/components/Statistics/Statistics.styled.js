import styled from 'styled-components';

export const Title = styled.h2`
text-align: center;
text-transform: uppercase;
font-size: 30px;
`;
export const StatsList = styled.ul`
display: flex;
text-align: center;
height: auto;
background-color: whitesmoke;
`;
export const StatsItem = styled.li`
display: flex;
flex-direction: column;
padding: 10px;
flex-basis: calc((100%) / 5);
background-color: rgb(165, 241, 241);
box-shadow:  0px 5px 10px 2px rgba(34, 60, 80, 0.2);
gap: 5px;
border: 1px solid;
border-color: rgba(225, 231, 231, 0.559);
`;
export const Label = styled.p`
font-size: 20px;
margin: 0;
`;
export const Percentage = styled.p`
font-size: 25px;
margin: 0;
`;
export const StatsWraper = styled.div`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 80px;
border: 1px solid;
border-color: rgba(225, 231, 231, 0.559);
border-radius: 5px;
background-color: white;
width: 400px;
box-shadow:  0px 5px 10px 2px rgba(34, 60, 80, 0.2);
`;
import {
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
  StatsWraper,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
    return (<StatsWraper>
      {title && <Title>{title}</Title>}
      <StatsList>
        {stats.map(({ id, label, percentage }) => {
          return (<StatsItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatsItem>)
        })}
  </StatsList>
</StatsWraper>)
};
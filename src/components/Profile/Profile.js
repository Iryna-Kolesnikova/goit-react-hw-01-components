import {
  CardWraper,
  Image,
  PageWraper,
  StatsList,
  StatsItem,
  Description,
  Username,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (<PageWraper>
    <CardWraper>
  <Description>
    <Image
      src={avatar}
      alt="User avatar"
    />
  <Username>{username}</Username>
<p>@{tag}</p>
<p>{location}</p>
  </Description>

  <StatsList>
    <StatsItem>
<span>Followers</span>
<span>{stats.followers}</span>
    </StatsItem>
    <StatsItem>
<span>Views</span>
<span>{stats.views}</span>
    </StatsItem>
    <StatsItem>
<span>Likes</span>
<span>{stats.likes}</span>
    </StatsItem>
  </StatsList>
</CardWraper></PageWraper>)
};
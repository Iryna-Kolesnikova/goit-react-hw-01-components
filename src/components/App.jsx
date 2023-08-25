import { GlobalStyle } from './GlobalStyle';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import user from './user.json';
import data from './data.json';
// import friend from './friends.json';
import transaction from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />

      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  );
};

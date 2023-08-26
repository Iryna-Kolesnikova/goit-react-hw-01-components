import { GlobalStyle } from './GlobalStyle';
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { FriendList } from "./FriendList/FriendList";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";

import user from '../Data/user.json';
import data from '../Data/data.json';
import friends from '../Data/friends.json';
import transaction from '../Data/transactions.json';

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
<FriendList items={friends}/>
      <TransactionHistory items={transaction} />
      <GlobalStyle />
    </div>
  );
};

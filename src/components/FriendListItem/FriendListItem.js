import { FriendListItemEl, FriendsItemStatus, } from './FriendListItem.styled';
export const FriendListItem = ({ card }) => {
    const isOnline = card.isOnline;
    return (<FriendListItemEl>
        <FriendsItemStatus style={{backgroundColor: isOnline ? 'green' : 'red'}} className="status">{card.status}</FriendsItemStatus>
  <img className="avatar" src={card.avatar} alt="User avatar" width="48" />
            <p className="name">{card.name}</p>
    </FriendListItemEl>)
};
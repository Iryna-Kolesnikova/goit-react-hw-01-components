import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = ({ items }) => {
    return (
        <ul>{items.map(item => (
        <li key={item.id}>
            <FriendListItem card={item} />
        </li>
    ))}</ul>
    );
};


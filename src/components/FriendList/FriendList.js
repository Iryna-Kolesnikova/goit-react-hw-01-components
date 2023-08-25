import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import {FriendListCard, } from './FriendList.styled';
export const FriendList = ({ items }) => {
    return (
        <FriendListCard>{items.map(item => (
        <li key={item.id}>
            <FriendListItem card={item} />
        </li>
    ))}</FriendListCard>
    );
};


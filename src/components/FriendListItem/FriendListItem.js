export const FriendListItem = ({card}) => {
    return (<div>
        <span className="status">{card.status}</span>
  <img className="avatar" src={card.avatar} alt="User avatar" width="48" />
            <p className="name">{card.name}</p>
    </div>)
};
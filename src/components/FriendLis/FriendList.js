import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './friendStyle.module.css';


export default function FriendList({friends}) {
  return (<ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            <FriendListItem name={friend.name} avatar = {friend.avatar} isOnline = {friend.isOnline} />
          </li>
        ))}
    </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    })
  ),
};

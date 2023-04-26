import PropTypes from 'prop-types';
import css from './friendStyle.module.css';

export default function FriendList({friends}) {
  return (<ul className={css.friendList}>
        {friends.map(friend => (
          <li key={friend.id}>
            { friend.isOnline  ? <span className={css.statusIn}>{friend.isOnline}</span> : <span className={css.statusOf}>{friend.isOnline}</span>}
            {/* <span className={css.status}>{friend.isOnline}</span> */}
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
            </li>
        ))}
    </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    })
  ),
};

import PropTypes from 'prop-types';
import css from './friendStyle.module.css';

export default function FriendListItem({name, avatar, isOnline}) {
    return (
    <>
     { isOnline  ? <span className={css.statusIn}>{isOnline}</span> : <span className={css.statusOf}>{isOnline}</span>}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </>)
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
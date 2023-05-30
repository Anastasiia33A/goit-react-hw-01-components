import PropTypes from 'prop-types';
import css from './friendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.item}>
            <span id={css.status} className={isOnline ? css.online : css.offline}></span>
            <img className={css.avatar} src={avatar} alt="Avatar" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem
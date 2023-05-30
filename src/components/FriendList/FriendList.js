import PropTypes from 'prop-types';
import css from './friendList.module.css';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
    return (
        <ul className={css['friend-list']}>{friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}</ul>
    )
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ),
};

export default FriendList;
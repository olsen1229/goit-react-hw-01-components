import { FriendListItem } from "components/FriendListItem/FriendListItem";
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.FriendList}>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
            ))}
        </ul>
    );
};


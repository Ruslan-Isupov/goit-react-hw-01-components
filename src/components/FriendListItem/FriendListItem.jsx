import css from "./FriendListItem.module.css"
import PropTypes from "prop-types";
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  // let status = isOnline.toString()
 
  return <li className={css.item} key={id}>
  <span className={css.true}></span>
            <img
    className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
  <p className={css.name}>{name}</p>
          </li>
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
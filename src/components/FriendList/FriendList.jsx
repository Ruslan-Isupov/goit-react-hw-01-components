import friends from "Data/friends"
export const FriendList = (props) => {
    return friends.map((friend) => {
        return  <li className="item" key = {friend.id}>
  <span className="status">{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
  <p className="name">{friend.name}</p>
</li>
      
    })
} 
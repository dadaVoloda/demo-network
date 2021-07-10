import Friend from './Friend/Friend'
import s from './Friends.module.css'

const Friends = (props) => {
  let friends = props.friend.map(friend => (
    <Friend name={friend.name} avatar={friend.avatar}/>
  ))
  return (
    <div className={s.friends}>
      <h3>Friends</h3>
      <ul>
        {friends}      
      </ul>
    </div>
  )
}

export default Friends
import s from './Users.module.css'
import userPhoto from '../../assets/images/default-avatar.jpg'
import { NavLink } from 'react-router-dom';

const User = ({user, followingInProgress, unfollow, follow}) => {

  return (
    <div className={s.user}>
      <div className={s.userLeft}>
        <NavLink to={`/profile/${user.id}`}><img className={s.userPhoto} src={user.photos.small || userPhoto} alt="" /></NavLink>
        {user.followed 
          ? <button disabled={followingInProgress.some(id => id === user.id)} 
              className={s.follow} 
              onClick={() => {unfollow(user.id)}}>Unfollow</button> 
          : <button disabled={followingInProgress.some(id => id === user.id)} 
              className={s.follow} 
              onClick={() => {follow(user.id)}}>Follow</button>}
      </div>
      <div>
        <div>
          <p>Name: {user.name}</p>
          <p>Status: {user.status}</p>
        </div>
        <div>
          <p>Country:</p>
          <p>City:</p>
        </div>
      </div>
    </div>
  )
}

export default User
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader'
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

  return (
    <div>
      <Paginator 
        currentPage={currentPage} 
        onPageChanged={onPageChanged} 
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.isFetching 
      ?
      <Preloader/> 
      : 
      <div className={s.usersList}>
        {users.map(u => 
          <User 
            user={u} 
            key={u.id} 
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          /> 
        )}
      </div>}
      
    </div>
  )
}
export default Users
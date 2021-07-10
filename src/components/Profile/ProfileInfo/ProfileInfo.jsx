import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/default-avatar.jpg'
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  
  return (
    <div>
      <div className={s.description}>
        <img className={s.userPhoto} src={props.profile.photos.large || userPhoto} alt="photo" />
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        <p>{props.profile.fullName}</p>
        <p>{props.profile.aboutMe}</p>
        <p>{props.profile.lookingForAJob && 'Ищу работу'}</p>
        <p>{props.profile.lookingForAJobDescription}</p>
        <p>{props.profile.contacts.facebook}</p>
        <p>{props.profile.contacts.github}</p>
        <p>{props.profile.contacts.vk}</p>
        <p>{props.profile.contacts.instagram}</p>
        <p>{props.profile.contacts.twitter}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

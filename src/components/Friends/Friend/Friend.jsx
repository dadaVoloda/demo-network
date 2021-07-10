import s from './../Friends.module.css'

const Friend = (props) => {
  return (
    <li>
      <img className={s.friendImg} src={props.avatar} alt="" />
      <p className={s.friendName}>{props.name}</p>
    </li>
  )
}

export default Friend